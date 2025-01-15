import { getPaginatedRecipes, LIMIT } from '../../../api/recipe'
import { useQuery } from '@tanstack/react-query'

import useMySearchParams from '../../../hooks/useMySearchParams'

import { RecipeCard } from '..'
import SkeletonCard from '../SkeletonCard'

export default function RecipesList() {
    const { page, queryParamsString } = useMySearchParams()

    const {
        data: recipes,
        error,
        isPending,
        isError,
    } = useQuery({
        queryKey: ['recipes', { page, queryParamsString }],
        queryFn: () => getPaginatedRecipes(page, queryParamsString),
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
