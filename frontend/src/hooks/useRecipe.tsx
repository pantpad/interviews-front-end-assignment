import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getRecipe, Recipe } from '../api/recipe'

import { recipesQueryOptions } from './useRecipes'
import useMySearchParams from './useMySearchParams'

export function useRecipe(recipeId: string) {
    const queryClient = useQueryClient()
    const { queryParamsString } = useMySearchParams()

    return useQuery({
        queryKey: ['recipe', { recipeId }],
        queryFn: () => getRecipe(recipeId),
        placeholderData: () => {
            return queryClient
                .getQueryData(recipesQueryOptions(queryParamsString).queryKey)
                ?.find((recipe: Recipe) => recipe.id === recipeId)
        },
    })
}
