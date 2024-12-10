import { useFormContext } from '../../../context/form-context'

export type FormInputType = {
    input: {
        id: string
        name: string
        type: string
        label: string
        placeholder: string
        required: boolean
        pattern?: string
        errorMessage: string
        min?: number
        max?: number
        accept?: string
    }
    value: string | number
    errorVisibility: {
        [key: string]: boolean
    }
}

export default function FormInput({
    input,
    value,
    errorVisibility,
}: FormInputType) {
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
