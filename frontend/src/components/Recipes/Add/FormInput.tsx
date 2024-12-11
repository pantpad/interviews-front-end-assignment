import {
    handleChange,
    handleShowError,
    useFormContext,
} from '../../../context/form-context'
import { FormInputType } from '../../../utils/recipeFormInputs'
type InputProps = {
    input: FormInputType
    value: string | number
}

export default function FormInput({ input, value }: InputProps) {
    const {
        dispatch,
        state: { errorVisibility },
    } = useFormContext()
    const { errorMessage, ...inputProps } = input

    return (
        <div>
            <input
                onChange={(e) =>
                    handleChange(dispatch, input.name, e.target.value)
                }
                value={value}
                className="peer w-64 rounded-md border border-gray-300 p-2"
                onBlur={() => handleShowError(dispatch, input.name)}
                {...inputProps}
            />
            <div className="my-2 h-4 peer-invalid:[&>span]:block">
                <span className="hidden text-red-500">
                    {errorVisibility[
                        input.name as keyof typeof errorVisibility
                    ] && errorMessage}
                </span>
            </div>
        </div>
    )
}
