import { queryOptions, useQuery } from '@tanstack/react-query'
import { getAllRecipes } from '../api/recipe'

import useMySearchParams from './useMySearchParams'

export const recipesQueryOptions = (queryParamsString: string) =>
    queryOptions({
        queryKey: ['recipes', { queryParamsString }],
        queryFn: () => getAllRecipes(queryParamsString),
    })

export function useRecipes() {
    const { queryParamsString } = useMySearchParams()
    return useQuery(recipesQueryOptions(queryParamsString))
}
