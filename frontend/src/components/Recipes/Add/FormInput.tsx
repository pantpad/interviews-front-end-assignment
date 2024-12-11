import { useState } from 'react'
import { handleChange, useFormContext } from '../../../context/form-context'
import { FormInputType } from '../../../utils/recipeFormInputs'
type InputProps = {
    input: FormInputType
    value: string | number
}

export default function FormInput({ input, value }: InputProps) {
    const { dispatch } = useFormContext()
    const { errorMessage, ...inputProps } = input

    const [error, setError] = useState(false)

    return (
        <div>
            <input
                onChange={(e) =>
                    handleChange(dispatch, input.name, e.target.value)
                }
                value={value}
                className="peer w-64 rounded-md border border-gray-300 p-2"
                onBlur={() => setError(true)}
                {...inputProps}
            />
            <div className="my-2 h-4 peer-invalid:[&>span]:block">
                <span className="hidden text-red-500">
                    {error && value && errorMessage}
                </span>
            </div>
        </div>
    )
}
