import { useSearchParams } from 'react-router'
import { RecipeCard } from '..'
import { endpoint, LIMIT, Recipe } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'
import { getQueryParamsString } from '../../../utils/searchParams'

export default function RecipesList() {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get('_page')) || 1
    const term = searchParams.get('q') || ''
    const cuisineId = searchParams.get('cuisineId') || ''
    const dietId = searchParams.get('dietId') || ''

    const queryParamsString = getQueryParamsString(term, cuisineId, dietId)

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
