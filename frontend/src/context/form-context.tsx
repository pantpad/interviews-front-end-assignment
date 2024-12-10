import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { endpoint } from '../api/recipe'
import {
    FormInputType,
    FormSelectType,
    FormValues,
    ErrorVisibility,
    initialFormValues,
    initialErrorVisibility,
} from '../utils/recipeFormInputs'

type FormContextType = {
    values: FormValues
    setValues: React.Dispatch<React.SetStateAction<FormValues>>
    errorVisibility: ErrorVisibility
    setErrorVisibility: React.Dispatch<React.SetStateAction<ErrorVisibility>>
    handleReset: () => void
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void
    showError: (input: FormInputType | FormSelectType) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormContext = createContext<FormContextType | null>(null)

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [values, setValues] = useState(initialFormValues)
    const [errorVisibility, setErrorVisibility] = useState(
        initialErrorVisibility
    )

    function handleReset() {
        setValues(initialFormValues)
        setErrorVisibility(initialErrorVisibility)
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function showError(input: FormInputType | FormSelectType) {
        setErrorVisibility((prev) => ({
            ...prev,
            [input.name]: true,
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const sendData = await fetch(`${endpoint}/recipes`, {
            method: 'POST',
            headers: {
                enctype: 'multipart/form-data',
            },
            body: form,
        })

        if (sendData.ok) {
            console.log('Recipe added successfully')
            alert('Recipe added successfully')
        } else {
            console.log('Error adding recipe')
            alert('Error adding recipe')
        }
    }

    return (
        <FormContext.Provider
            value={{
                values,
                setValues,
                errorVisibility,
                setErrorVisibility,
                handleReset,
                handleChange,
                showError,
                handleSubmit,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider')
    }
    return context
}

export default FormContext
