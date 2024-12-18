import { useParams } from 'react-router'
import { useData } from '../../../hooks/useData'

import { Recipe, endpoint } from '../../../api/recipe'

import { RecipeCard } from '..'
import SkeletonCard from '../SkeletonCard'
import { RecipeComments } from './RecipeComments'

export default function RecipeDetails() {
    const { recipeId } = useParams()

    if (!recipeId) throw new Error('RecipeId missing in url')

    const {
        data: recipe,
        error,
        loading,
    } = useData<Recipe>(`${endpoint}/recipes/${recipeId}`, {} as Recipe)

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading) {
        return <SkeletonCard />
    }

    if (!recipe) {
        return <div>No recipe found</div>
    }

    return (
        <div className="mb-8 flex flex-col gap-4">
            <RecipeCard recipe={recipe} noLink />
            {/* Recipe Ingredients  */}
            <section>
                <h2 className="text-2xl font-bold">Ingredients</h2>
                <ul>
                    {recipe.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>
            {/* Recipe Instructions */}
            <section>
                <h2 className="text-2xl font-bold">Instructions</h2>
                <p>{recipe.instructions}</p>
            </section>
            {/* Recipe Comments     */}
            <RecipeComments recipeId={recipeId} />
        </div>
    )
}
