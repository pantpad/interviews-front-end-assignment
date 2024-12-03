const endpoint = 'http://localhost:8080'

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

export const getRecipes = async (page: number): Promise<Recipe[]> => {
    const response = await fetch(`${endpoint}/recipes?_page=${page}`)
    return response.json()
}

export const getRecipe = async (recipeId: string): Promise<Recipe> => {
    const response = await fetch(`${endpoint}/recipes/${recipeId}`)
    return response.json()
}

export const getCuisine = async (cuisineId: string): Promise<DetailsType> => {
    const response = await fetch(`${endpoint}/cuisines/${cuisineId}`)
    return response.json()
}

export const getDifficulty = async (difficultyId: string): Promise<DetailsType> => {
    const response = await fetch(`${endpoint}/difficulties/${difficultyId}`)
    return response.json()
}

export const getDiet = async (dietId: string): Promise<DetailsType> => {
    const response = await fetch(`${endpoint}/diets/${dietId}`)
    return response.json()
}

export type DetailsType = Record<'id' | 'name', string>
