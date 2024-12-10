import { useFormContext } from '../../../context/form-context'

export type FormSelectType = {
    input: {
        id: string
        name: string
        label: string
        options: { value: number; label: string }[]
    }
    value: string | number
}

export default function FormSelect({ input, value }: FormSelectType) {
    const { handleChange } = useFormContext()

    return (
        <select
            onChange={handleChange}
            value={value}
            className="peer w-64 rounded-md border border-gray-300 p-2"
            {...input}
        >
            {input.options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
