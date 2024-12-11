import { handleChange, useFormContext } from '../../../context/form-context'
import useRecipeDetails from '../../../hooks/useRecipeDetails'
import { FormSelectType } from '../../../utils/recipeFormInputs'
export type SelectProps = {
    input: FormSelectType
    value: string | number
}

export default function FormSelect({ input, value }: SelectProps) {
    const { dispatch } = useFormContext()
    const { getOptionArray } = useRecipeDetails()

    const options = getOptionArray(input.options)

    return (
        <select
            onChange={(e) => {
                handleChange(dispatch, input.name, e.target.value)
            }}
            value={value}
            className="peer w-64 rounded-md border border-gray-300 p-2"
            {...input}
        >
            {options?.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}
