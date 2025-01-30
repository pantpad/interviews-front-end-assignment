import { SelectHTMLAttributes } from 'react'
import useRecipeDetails from '../../../hooks/useRecipeDetails'
import { FormValidationSchema } from '../../../context/form-context'

export type SelectProps = {
    options: 'cuisines' | 'diets' | 'difficulties'
    name: keyof typeof FormValidationSchema.shape
    value: string | number
    errorMessage?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export function FormSelect({
    options,
    value,
    name,
    onChange,
    errorMessage,
    ...select
}: SelectProps) {
    const { getOptionArray } = useRecipeDetails()
    const optionsValues = getOptionArray(options)

    return (
        <div>
            <select
                onChange={onChange}
                value={value}
                name={name}
                className="peer w-full rounded-md border border-gray-300 p-2"
                {...select}
            >
                <option value="">
                    {optionsValues ? `Choose ${options}` : ''}
                </option>
                {optionsValues?.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className="my-2 h-4 [&>span]:block">
                {errorMessage && (
                    <span className="hidden text-red-500">{errorMessage}</span>
                )}
            </div>
        </div>
    )
}
