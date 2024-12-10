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
    values: {
        [key: string]: string | number
    }
    errorVisibility: {
        [key: string]: boolean
    }
    setErrorVisibility: React.Dispatch<
        React.SetStateAction<{
            name: boolean
            ingredients: boolean
            instructions: boolean
            cuisineId: boolean
            dietId: boolean
            image: boolean
        }>
    >
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void
}

export default function FormInput({
    input,
    values,
    errorVisibility,
    setErrorVisibility,
    handleChange,
}: FormInputType) {
    const { errorMessage, ...inputProps } = input

    return (
        <>
            <input
                onChange={handleChange}
                value={values[input.name as keyof typeof values]}
                className="peer w-64 rounded-md border border-gray-300 p-2"
                onBlur={() => {
                    setErrorVisibility((prev) => ({
                        ...prev,
                        [input.name]: true,
                    }))
                }}
                {...inputProps}
            />
            <span className="hidden h-4 text-red-500 peer-invalid:block">
                {errorVisibility[input.name as keyof typeof errorVisibility] &&
                    errorMessage}
            </span>
        </>
    )
}
