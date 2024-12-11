import { useState } from 'react'
import { submitRecipe } from '../../../api/recipe'
import FormInput, { FormInputType } from './FormInput'
import FormSelect, { FormSelectType } from './FormSelect'
import FormButtons from './FormButtons'

export type FormValues = {
    name: string
    ingredients: string
    instructions: string
    cuisineId: number
    dietId: number
    difficultyId: number
    image: string
}

const formInputs: (FormInputType | FormSelectType)[] = [
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
    image: false,
}

function isFormSelect(
    input: FormInputType | FormSelectType
): input is FormSelectType {
    return 'options' in input
}

export default function RecipeForm() {
    const [values, setValues] = useState<FormValues>(initialValues)
    const [errorVisibility, setErrorVisibility] = useState(
        initialErrorVisibility
    )

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const response = await submitRecipe(form)

        if (response.ok) {
            console.log('Recipe added successfully')
            alert('Recipe added successfully')
        } else {
            console.log('Error adding recipe')
            alert('Error adding recipe')
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
                {formInputs.map((input) => (
                    <div className="[&>label]:block" key={input.id}>
                        <label htmlFor={input.name}>{input.label}</label>
                        {isFormSelect(input) ? (
                            <FormSelect
                                input={input}
                                values={values}
                                handleChange={handleChange}
                            />
                        ) : (
                            <FormInput
                                input={input}
                                values={values}
                                errorVisibility={errorVisibility}
                                setErrorVisibility={setErrorVisibility}
                                handleChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <FormButtons />
            </form>
        </>
    )
}
