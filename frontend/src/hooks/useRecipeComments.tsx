import { useQuery } from '@tanstack/react-query'
import { getComments } from '../api/recipe'

export function useRecipeComments(recipeId: string) {
    return useQuery({
        queryKey: ['recipeComments', { recipeId }],
        queryFn: () => getComments(recipeId),
    })
}
