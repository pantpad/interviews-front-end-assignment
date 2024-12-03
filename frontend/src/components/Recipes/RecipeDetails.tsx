import { RecipeCard } from '.'
import { Recipe } from '../../api/recipe'
import { endpoint } from '../../api/recipe'
import { useData } from '../../hooks/useData'

export default function RecipeDetails({
    recipeId = '1',
}: {
    recipeId?: string
}) {
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
        <div className="mx-auto w-full max-w-7xl p-2">
            <RecipeCard recipe={recipe} />
        </div>
    )
}
