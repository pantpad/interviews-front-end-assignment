import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getRecipe, Recipe } from '../api/recipe'

import { paginatedRecipesQueryOptions } from './usePaginatedRecipes'
import useMySearchParams from './useMySearchParams'

export function useRecipe(recipeId: string) {
    const queryClient = useQueryClient()
    const { page, queryParamsString } = useMySearchParams()

    return useQuery({
        queryKey: ['recipe', { recipeId }],
        queryFn: () => getRecipe(recipeId),
        placeholderData: () => {
            return queryClient
                .getQueryData(
                    paginatedRecipesQueryOptions(page, queryParamsString)
                        .queryKey
                )
                ?.find((recipe: Recipe) => recipe.id === recipeId)
        },
    })
}
