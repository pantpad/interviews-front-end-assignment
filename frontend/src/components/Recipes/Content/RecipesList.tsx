import { RecipeCard } from '..'
import { endpoint, LIMIT, Recipe } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'
import { getQueryParamsString } from '../../../utils/searchParams'
import useMySearchParams from '../../../hooks/useMySearchParams'
import SkeletonCard from '../SkeletonCard'

export default function RecipesList() {
    const { q, cuisineId, dietId, difficultyId, page } = useMySearchParams()

    const queryParamsString = getQueryParamsString({
        q,
        cuisineId,
        dietId,
        difficultyId,
    })

    const {
        data: recipes,
        error,
        loading,
    } = useData<Recipe[]>(
        `${endpoint}/recipes?_page=${page}&_limit=${LIMIT}&${queryParamsString}`,
        []
    )

    console.log('loading', loading)

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading) {
        return Array.from({ length: LIMIT }).map((_, index) => (
            <SkeletonCard key={index} />
        ))
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
