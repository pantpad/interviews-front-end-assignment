import { handleChange, useFormContext } from '../../../context/form-context'
import { FormSelectType } from '../../../utils/recipeFormInputs'
export type SelectProps = {
    input: FormSelectType
    value: string | number
}

export default function FormSelect({ input, value }: SelectProps) {
    const { dispatch } = useFormContext()

    return (
        <select
            onChange={(e) => {
                handleChange(dispatch, input.name, e.target.value)
            }}
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
