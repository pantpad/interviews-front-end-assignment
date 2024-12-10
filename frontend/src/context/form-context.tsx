import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { endpoint } from '../api/recipe'

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

type FormInputType = {
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

type FormSelectType = {
    id: string
    name: string
    label: string
    options: { value: number; label: string }[]
}

export const formInputs: (FormInputType | FormSelectType)[] = [
    {
        id: 'name',
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Insert recipe name',
        required: true,
        pattern: '^[a-zA-Z0-9\s]+$',
        errorMessage: 'Name must contain only letters, numbers and spaces',
    },
    {
        id: 'ingredients',
        name: 'ingredients',
        type: 'text',
        label: 'Ingredients',
        placeholder: 'Insert ingredients',
        required: true,
        pattern: '^[a-zA-Z0-9\s]+$',
        errorMessage:
            'Ingredients must contain only letters, numbers and spaces',
    },
    {
        id: 'instructions',
        name: 'instructions',
        type: 'text',
        label: 'Instructions',
        placeholder: 'Insert instructions',
        required: true,
        pattern: '^[a-zA-Z0-9\s]+$',
        errorMessage:
            'Instructions must contain only letters, numbers and spaces',
    },
    {
        id: 'cuisineId',
        name: 'cuisineId',
        type: 'number',
        label: 'Cuisine',
        placeholder: 'Insert cuisine',
        required: true,
        min: 1,
        max: 3,
        errorMessage: 'Cuisine must be a number between 1 and 3',
    },
    {
        id: 'dietId',
        name: 'dietId',
        type: 'number',
        label: 'Dietary',
        placeholder: 'Insert dietary',
        required: true,
        min: 1,
        max: 3,
        errorMessage: 'Dietary must be a number between 1 and 3',
    },
    {
        id: 'difficultyId',
        name: 'difficultyId',
        label: 'Difficulty',
        options: [
            { value: 1, label: 'Easy' },
            { value: 2, label: 'Medium' },
            { value: 3, label: 'Hard' },
        ],
    },
    {
        id: 'image',
        name: 'image',
        type: 'file',
        label: 'Image',
        placeholder: 'Insert image',
        required: true,
        accept: 'image/png, image/jpeg, image/jpg',
        errorMessage: '',
    },
]

type FormValues = {
    name: string
    ingredients: string
    instructions: string
    cuisineId: number
    dietId: number
    difficultyId: number
    image: string
}

type ErrorVisibility = {
    name: boolean
    ingredients: boolean
    instructions: boolean
    cuisineId: boolean
    dietId: boolean
    image: boolean
}

const initialFormValues: FormValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: 1,
    dietId: 1,
    difficultyId: 1,
    image: '',
}

const initialErrorVisibility: ErrorVisibility = {
    name: false,
    ingredients: false,
    instructions: false,
    cuisineId: false,
    dietId: false,
    image: false,
}

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
