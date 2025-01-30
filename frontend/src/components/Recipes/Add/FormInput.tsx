import { InputHTMLAttributes, useState } from 'react'
import { FormValidationSchema } from '../../../context/form-context'
import { z } from 'zod'

type InputProps = {
    errorMessage: string
    name: keyof typeof FormValidationSchema.shape
} & InputHTMLAttributes<HTMLInputElement>

export function FormInput({
    errorMessage,
    value,
    name,
    onChange,
    ...input
}: InputProps) {
    const [error, setError] = useState(false)
    const [zodError, setZodError] = useState('')

    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                name={name}
                className="peer w-full rounded-md border border-gray-300 p-2"
                onBlur={() => {
                    setError(true)
                    try {
                        FormValidationSchema.shape[name].parse(value)
                        setZodError('')
                    } catch (error) {
                        if (error instanceof z.ZodError) {
                            setZodError(error.issues[0].message)
                        }
                    }
                }}
                {...input}
            />
            <div className="my-2 h-4 [&>span]:block">
                <span className="hidden text-red-500">
                    {error && value && !errorMessage && zodError}
                </span>
                {errorMessage && (
                    <span className="hidden text-red-500">{errorMessage}</span>
                )}
            </div>
        </div>
    )
}
