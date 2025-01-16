import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query'
import { getPaginatedRecipes } from '../api/recipe'

import useMySearchParams from './useMySearchParams'
import { useEffect } from 'react'

export const paginatedRecipesQueryOptions = (
    page: number,
    queryParamsString: string
) =>
    queryOptions({
        queryKey: ['recipes', { page, queryParamsString }],
        queryFn: ({ signal }) =>
            getPaginatedRecipes(page, queryParamsString, signal),
    })

export function usePaginatedRecipes() {
    const { page, queryParamsString } = useMySearchParams()
    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.prefetchQuery(
            paginatedRecipesQueryOptions(page + 1, queryParamsString)
        )
    }, [page, queryParamsString])

    return useQuery({
        ...paginatedRecipesQueryOptions(page, queryParamsString),
        placeholderData: (query) => {
            return query
        },
    })
}
