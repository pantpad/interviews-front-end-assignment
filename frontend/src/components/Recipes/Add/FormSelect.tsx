export type FormSelectType = {
    id: string
    name: string
    label: string
    options: { value: number; label: string }[]
}

type FormSelectProps = {
    input: FormSelectType
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
}: FormSelectProps) {
    return (
        <select
            onChange={handleChange}
            value={values[input.name]}
            className="peer w-64 rounded-md border border-gray-300 p-2"
            {...input}
        >
            {input.options?.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
