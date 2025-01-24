export const endpoint = import.meta.env.VITE_API_ENDPOINT

export type Recipe = {
    id: string
    name: string
    ingredients: string[]
    instructions: string
    cuisineId: string
    dietId: string
    difficultyId: string
    image: string
}

export type RecipeCommentType = {
    id: string
    recipeId: string
    comment: string
    rating: number
    date: Date
}

export type DetailsType = {
    id: string
    name: string
}

export const LIMIT = 4 as const

export const getAllRecipes = async (queryParamsString?: string) => {
    const response = await fetch(
        `${endpoint}/recipes${queryParamsString ? '?' + queryParamsString : ''}`
    )

    if (!response.ok) {
        throw new Error('Could not fetch recipe :(')
    }

    return (await response.json()) as Recipe[]
}

export const getPaginatedRecipes = async (
    page: number,
    queryParamsString?: string,
    signal?: AbortSignal
) => {
    const response = await fetch(
        `${endpoint}/recipes?_page=${page}&_limit=${LIMIT}${queryParamsString ? `&${queryParamsString}` : ''}`,
        { signal }
    )

    if (!response.ok) {
        throw new Error('Could not fetch recipe :(')
    }

    return (await response.json()) as Recipe[]
}

export const getRecipe = async (recipeId: string) => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}`)

    if (!response.ok) {
        throw new Error('Could not fetch recipe :(')
    }

    return (await response.json()) as Recipe
}

export const getComments = async (recipeId: string) => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}/comments`)
    if (!response.ok) {
        throw new Error('Could not fetch recipe comments')
    }
    return (await response.json()) as RecipeCommentType[]
}

export const getCuisines = async () => {
    const response = await fetch(`${endpoint}/cuisines`)

    if (!response.ok) {
        throw new Error('Could not fetch cuisines')
    }

    return (await response.json()) as DetailsType[]
}

export const getDifficulties = async () => {
    const response = await fetch(`${endpoint}/difficulties`)
    if (!response.ok) {
        throw new Error('Could not fetch difficulties')
    }

    return (await response.json()) as DetailsType[]
}

export const getDiets = async () => {
    const response = await fetch(`${endpoint}/diets`)
    if (!response.ok) {
        throw new Error('Could not fetch diets')
    }

    return (await response.json()) as DetailsType[]
}

export const submitRecipe = async (formData: FormData) => {
    const response = await fetch(`${endpoint}/recipes`, {
        method: 'POST',
        headers: {
            enctype: 'multipart/form-data',
        },
        body: formData,
    })

    if (!response.ok) {
        throw new Error('Could not add recipe')
    }

    return (await response.json()) as Recipe
}

export const submitComment = async ({
    formData,
    recipeId,
}: {
    formData: FormData
    recipeId: string
}) => {
    const formObject = Object.fromEntries(formData.entries())
    const formWithData = {
        ...formObject,
        rating: Number(formObject.rating),
        date: new Date(),
    }

    const response = await fetch(`${endpoint}/recipes/${recipeId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formWithData),
    })

    if (!response.ok) {
        throw new Error('Could not add comment')
    }

    return (await response.json()) as RecipeCommentType
}
