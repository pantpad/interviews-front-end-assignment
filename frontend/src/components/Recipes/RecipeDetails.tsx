import { useParams } from 'react-router'
import { RecipeCard } from '.'
import { Recipe } from '../../api/recipe'
import { endpoint } from '../../api/recipe'
import { useData } from '../../hooks/useData'

export default function RecipeDetails() {
    const { recipeId } = useParams()

    const {
        data: recipe,
        error,
        loading,
    } = useData<Recipe>(`${endpoint}/recipes/${recipeId}`)

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!recipe) {
        return <div>No recipe found</div>
    }

    return (
        <div>
            <RecipeCard recipe={recipe} noLink />
        </div>
    )
}
