export type FormInputType = {
    id: string
    name: keyof FormValues
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

export type FormSelectType = {
    id: string
    name: keyof FormValues
    label: string
    options: { value: number; label: string }[]
}

export type FormValues = {
    name: string
    ingredients: string
    instructions: string
    cuisineId: number
    dietId: number
    difficultyId: number
    image: string
}

export type ErrorVisibility = {
    name: boolean
    ingredients: boolean
    instructions: boolean
    cuisineId: boolean
    dietId: boolean
    image: boolean
}

export const initialFormValues: FormValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: 1,
    dietId: 1,
    difficultyId: 1,
    image: '',
}

export const initialErrorVisibility: ErrorVisibility = {
    name: false,
    ingredients: false,
    instructions: false,
    cuisineId: false,
    dietId: false,
    image: false,
}

export const recipeFormInputs: (FormInputType | FormSelectType)[] = [
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
