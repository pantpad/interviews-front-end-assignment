const endpoint = 'http://localhost:8080/recipes'

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
    const response = await fetch(`${endpoint}?_page=${page}`)
    return response.json()
}
