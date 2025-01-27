import { InputHTMLAttributes, useState } from 'react'

type InputProps = {
    errorMessage: string
    name: string
} & InputHTMLAttributes<HTMLInputElement>

export function FormInput({
    errorMessage,
    value,
    name,
    onChange,
    ...input
}: InputProps) {
    const [error, setError] = useState(false)

    return (
        <div>
            <input
                onChange={onChange}
                value={value}
                name={name}
                className="peer w-full rounded-md border border-gray-300 p-2"
                onBlur={() => setError(true)}
                {...input}
            />
            <div className="my-2 h-4 peer-invalid:[&>span]:block">
                <span className="hidden text-red-500">
                    {error && value && errorMessage}
                </span>
            </div>
        </div>
    )
}
