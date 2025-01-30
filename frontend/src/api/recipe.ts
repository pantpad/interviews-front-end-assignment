import { FormValues } from '../context/form-context'
import { z } from 'zod'

export const endpoint = import.meta.env.VITE_API_ENDPOINT

export const ResponseRecipeSchema = z.object({
    id: z.string(),
    name: z.string(),
    ingredients: z.array(z.string()),
    instructions: z.string(),
    cuisineId: z.string(),
    dietId: z.string(),
    difficultyId: z.string(),
    image: z.string(),
})
export type ResponseRecipe = z.infer<typeof ResponseRecipeSchema>

export const ResponseRecipeCommentSchema = z.object({
    id: z.string(),
    recipeId: z.string(),
    comment: z.string(),
    rating: z.number().min(1).max(5),
    date: z.string().transform((str) => new Date(str)),
})
export type ResponseRecipeComment = z.infer<typeof ResponseRecipeCommentSchema>

export const DetailsSchema = z.object({
    id: z.string(),
    name: z.string(),
})
export type DetailsType = z.infer<typeof DetailsSchema>

export const LIMIT = 4 as const

export const getAllRecipes = async (queryParamsString?: string) => {
    const response = await fetch(
        `${endpoint}/recipes${queryParamsString ? '?' + queryParamsString : ''}`
    )

    if (!response.ok) {
        throw new Error('Could not fetch recipe :(')
    }

    return z.array(ResponseRecipeSchema).parse(await response.json())
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

    return z.array(ResponseRecipeSchema).parse(await response.json())
}

export const getRecipe = async (recipeId: string) => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}`)

    if (!response.ok) {
        throw new Error('Could not fetch recipe :(')
    }

    return ResponseRecipeSchema.parse(await response.json())
}

export const getComments = async (recipeId: string) => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}/comments`)
    if (!response.ok) {
        throw new Error('Could not fetch recipe comments')
    }
    return z.array(ResponseRecipeCommentSchema).parse(await response.json())
}

export const getCuisines = async () => {
    const response = await fetch(`${endpoint}/cuisines`)

    if (!response.ok) {
        throw new Error('Could not fetch cuisines')
    }

    return z.array(DetailsSchema).parse(await response.json())
}

export const getDifficulties = async () => {
    const response = await fetch(`${endpoint}/difficulties`)
    if (!response.ok) {
        throw new Error('Could not fetch difficulties')
    }

    return z.array(DetailsSchema).parse(await response.json())
}

export const getDiets = async () => {
    const response = await fetch(`${endpoint}/diets`)
    if (!response.ok) {
        throw new Error('Could not fetch diets')
    }

    return z.array(DetailsSchema).parse(await response.json())
}

export const submitRecipe = async (formData: FormValues) => {
    const form = new FormData()

    const file = formData.image
    if (!file) {
        return
    }
    const blob = new Blob([await file.arrayBuffer()])

    Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            if (key === 'image') {
                form.append(key, blob)
            } else {
                form.append(key, value as string)
            }
        }
    })

    const response = await fetch(`${endpoint}/recipes`, {
        method: 'POST',
        headers: {
            enctype: 'multipart/form-data',
        },
        body: form,
    })

    if (!response.ok) {
        throw new Error('Could not add recipe')
    }

    return (await response.json()) as ResponseRecipe
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

    return ResponseRecipeCommentSchema.parse(await response.json())
}
