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

export const LIMIT = 4 as const

export const getRecipes = async (page: number): Promise<Recipe[]> => {
    const response = await fetch(`${endpoint}/recipes?_page=${page}`)
    return response.json()
}

export const getRecipe = async (recipeId: string): Promise<Recipe> => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}`)
    return response.json()
}

export const getCuisines = async (): Promise<DetailsType[]> => {
    const response = await fetch(`${endpoint}/cuisines`)
    return response.json()
}

export const getDifficulties = async (): Promise<DetailsType[]> => {
    const response = await fetch(`${endpoint}/difficulties`)
    return response.json()
}

export const getDiets = async (): Promise<DetailsType[]> => {
    const response = await fetch(`${endpoint}/diets`)
    return response.json()
}

export const submitRecipe = async (formData: FormData) => {
    const response = await fetch(`${endpoint}/recipes`, {
        method: 'POST',
        headers: {
            enctype: 'multipart/form-data',
        },
        body: formData,
    })
    return response.json()
}

export type DetailsType = Record<'id' | 'name', string>
