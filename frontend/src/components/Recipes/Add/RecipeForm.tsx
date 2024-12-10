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
    },
    {
        id: 'ingredients',
        name: 'ingredients',
        type: 'text',
        label: 'Ingredients',
        placeholder: 'Insert ingredients',
    },
    {
        id: 'instructions',
        name: 'instructions',
        type: 'text',
        label: 'Instructions',
        placeholder: 'Insert instructions',
    },
    {
        id: 'cuisineId',
        name: 'cuisineId',
        type: 'number',
        label: 'Cuisine',
        placeholder: 'Insert cuisine',
    },
    {
        id: 'dietId',
        name: 'dietId',
        type: 'number',
        label: 'Dietary',
        placeholder: 'Insert dietary',
    },
    {
        id: 'difficultyId',
        name: 'difficultyId',
        type: 'number',
        label: 'Difficulty',
        placeholder: 'Insert difficulty',
    },
    {
        id: 'image',
        name: 'image',
        type: 'file',
        label: 'Image',
        placeholder: 'Insert image',
    },
]

export default function RecipeForm() {
    const [values, setValues] = useState<FormInputTypes>({
        name: '',
        ingredients: '',
        instructions: '',
        cuisineId: 0,
        dietId: 0,
        difficultyId: 0,
        image: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values)

    return (
        <>
            <form
                className="flex flex-col gap-4"
                action={`${endpoint}/recipes`}
                method="POST"
                encType="multipart/form-data"
            >
                {formInputs.map((input) => (
                    <div className="[&>*]:block" key={input.id}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input
                            {...input}
                            onChange={handleChange}
                            value={values[input.name as keyof typeof values]}
                        />
                    </div>
                ))}
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
