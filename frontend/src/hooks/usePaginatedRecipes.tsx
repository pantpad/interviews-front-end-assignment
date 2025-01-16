import { queryOptions, useQuery } from '@tanstack/react-query'
import { getPaginatedRecipes } from '../api/recipe'

import useMySearchParams from './useMySearchParams'

export const paginatedRecipesQueryOptions = (
    page: number,
    queryParamsString: string
) =>
    queryOptions({
        queryKey: ['recipes', { page, queryParamsString }],
        queryFn: () => getPaginatedRecipes(page, queryParamsString),
        placeholderData: (query) => {
            return query
        },
    })

export function usePaginatedRecipes() {
    const { page, queryParamsString } = useMySearchParams()
    return useQuery(paginatedRecipesQueryOptions(page, queryParamsString))
}
