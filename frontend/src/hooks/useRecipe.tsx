import { useQuery } from '@tanstack/react-query'
import { getRecipe } from '../api/recipe'

export function useRecipe(recipeId: string) {
    return useQuery({
        queryKey: ['recipe', { recipeId }],
        queryFn: () => getRecipe(recipeId),
    })
}
