import { useState } from 'react'
import { endpoint } from '../../../api/recipe'

type FormInputTypes = {
    name: string
    ingredients: string
    instructions: string
    cuisineId: number
    dietId: number
    difficultyId: number
    image: string
}

const formInputs = [
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
        type: 'number',
        label: 'Difficulty',
        placeholder: 'Insert difficulty',
        required: true,
        min: 1,
        max: 3,
        errorMessage: 'Difficulty must be a number between 1 and 3',
    },
    {
        id: 'image',
        name: 'image',
        type: 'file',
        label: 'Image',
        placeholder: 'Insert image',
        required: true,
        accept: 'image/png, image/jpeg, image/jpg',
        errorMessage: 'Image must be a png, jpeg or jpg',
    },
]

const initialValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: 1,
    dietId: 1,
    difficultyId: 1,
    image: '',
}

const initialErrorVisibility = {
    name: false,
    ingredients: false,
    instructions: false,
    cuisineId: false,
    dietId: false,
    difficultyId: false,
    image: false,
}

export default function RecipeForm() {
    const [values, setValues] = useState<FormInputTypes>(initialValues)
    const [errorVisibility, setErrorVisibility] = useState(
        initialErrorVisibility
    )

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues({ ...values, [e.target.name]: e.target.value })
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
        } else {
            console.log('Error adding recipe')
        }
    }

    function handleReset() {
        setValues(initialValues)
        setErrorVisibility(initialErrorVisibility)
    }

    return (
        <>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                {formInputs.map((input) => {
                    const { errorMessage, ...inputProps } = input

                    return (
                        <div className="[&>label]:block" key={input.id}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input
                                onChange={handleChange}
                                value={
                                    values[input.name as keyof typeof values]
                                }
                                className="peer w-64 rounded-md border border-gray-300 p-2"
                                onBlur={() => {
                                    setErrorVisibility({
                                        ...errorVisibility,
                                        [input.name]: true,
                                    })
                                }}
                                {...inputProps}
                            />
                            <span className="hidden h-4 text-red-500 peer-invalid:block">
                                {errorVisibility[
                                    input.name as keyof typeof errorVisibility
                                ] && errorMessage}
                            </span>
                        </div>
                    )
                })}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white"
                    >
                        Add new recipe
                    </button>
                    <button
                        type="reset"
                        className="rounded-md bg-gray-500 px-4 py-2 text-white"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    )
}
