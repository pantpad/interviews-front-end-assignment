import { SelectHTMLAttributes } from 'react'
import useRecipeDetails from '../../../hooks/useRecipeDetails'

export type SelectProps = {
    options: 'cuisines' | 'diets' | 'difficulties'
    name: string
    value: string | number
} & SelectHTMLAttributes<HTMLSelectElement>

export function FormSelect({
    options,
    value,
    name,
    onChange,
    ...select
}: SelectProps) {
    const { getOptionArray } = useRecipeDetails()
    const optionsValues = getOptionArray(options)

    return (
        <select
            onChange={onChange}
            value={value}
            name={name}
            className="peer mb-6 w-64 rounded-md border border-gray-300 p-2"
            {...select}
        >
            <option value="">{optionsValues ? `Choose ${options}` : ''}</option>
            {optionsValues?.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}
