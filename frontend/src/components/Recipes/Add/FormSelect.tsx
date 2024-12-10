export type FormSelectType = {
    input: {
        id: string
        name: string
        label: string
        options: { value: number; label: string }[]
    }
    values: {
        [key: string]: string | number
    }
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void
}

export default function FormSelect({
    input,
    values,
    handleChange,
}: FormSelectType) {
    return (
        <select
            onChange={handleChange}
            value={values[input.name as keyof typeof values]}
            className="peer w-64 rounded-md border border-gray-300 p-2"
            {...input}
        >
            {input.options?.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
