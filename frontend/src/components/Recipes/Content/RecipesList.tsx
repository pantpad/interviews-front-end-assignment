import { endpoint, LIMIT, Recipe } from '../../../api/recipe'
import { useQuery } from '@tanstack/react-query'

import useMySearchParams from '../../../hooks/useMySearchParams'

import { RecipeCard } from '..'
import SkeletonCard from '../SkeletonCard'

export default function RecipesList() {
    const { page, queryParamsString } = useMySearchParams()

    const {
        data: recipes = [],
        error,
        isPending,
        isError,
    } = useQuery<Recipe[]>({
        queryKey: ['recipes', { page, queryParamsString }],
        queryFn: async (): Promise<Recipe[]> => {
            const response = await fetch(
                `${endpoint}/recipes?_page=${page}&_limit=${LIMIT}${queryParamsString.length > 0 ? `&${queryParamsString}` : ''}`
            )
            return await response.json()
        },
    })

    if (isPending) {
        return Array.from({ length: LIMIT }).map((_, index) => (
            <SkeletonCard key={index} />
        ))
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (recipes.length === 0) {
        return <div>No recipes found</div>
    }

    return (
        <div className="flex flex-col gap-4">
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}
