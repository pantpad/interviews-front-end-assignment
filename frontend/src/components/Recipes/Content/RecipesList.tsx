import { LIMIT } from '../../../api/recipe'

import { RecipeCard } from '..'
import SkeletonCard from '../SkeletonCard'
import { usePaginatedRecipes } from '../../../hooks/usePaginatedRecipes'

export default function RecipesList() {
    const {
        data: recipes,
        error,
        isPending,
        isPlaceholderData,
        isError,
    } = usePaginatedRecipes()

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
                return (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isDataChanging={isPlaceholderData}
                    />
                )
            })}
        </div>
    )
}
