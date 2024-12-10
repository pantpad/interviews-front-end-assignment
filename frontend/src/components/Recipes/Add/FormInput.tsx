import { useFormContext } from '../../../context/form-context'
import { FormInputType, ErrorVisibility } from '../../../utils/recipeFormInputs'
type InputProps = {
    input: FormInputType
    value: string | number
    errorVisibility: ErrorVisibility
}

export default function FormInput({
    input,
    value,
    errorVisibility,
}: InputProps) {
    const { handleChange, showError } = useFormContext()
    const { errorMessage, ...inputProps } = input

    return (
        <div>
            <input
                onChange={handleChange}
                value={value}
                className="peer w-64 rounded-md border border-gray-300 p-2"
                onBlur={() => showError(input)}
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
