import { RecipeCard } from '..'
import { endpoint, LIMIT, Recipe } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'
import { getQueryParamsString } from '../../../utils/searchParams'
import useMySearchParams from '../../../hooks/useMySearchParams'

export default function RecipesList() {
    const { q, cuisineId, dietId, difficultyId, page } = useMySearchParams()

    const queryParamsString = getQueryParamsString({
        q,
        cuisineId,
        dietId,
        difficultyId,
    })

    const {
        data: recipes = [],
        error,
        loading,
    } = useData<Recipe[]>(
        `${endpoint}/recipes?_page=${page}&_limit=${LIMIT}&${queryParamsString}`,
        []
    )

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading || recipes.length === 0) {
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
