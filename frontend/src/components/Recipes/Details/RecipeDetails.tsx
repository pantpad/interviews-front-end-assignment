import { useParams } from 'react-router'
import { useRecipe } from '../../../hooks/useRecipe'

import { RecipeCard } from '..'

import { RecipeComments } from './RecipeComments'
import { useRecipeComments } from '../../../hooks/useRecipeComments'

import { SkeletonDetails } from './SkeletonDetails'
import SkeletonCard from '../SkeletonCard'

export default function RecipeDetails() {
    const { recipeId } = useParams()

    if (!recipeId) throw new Error('RecipeId missing in url')

    const recipeQuery = useRecipe(recipeId)
    const recipeCommentsQuery = useRecipeComments(recipeId)

    if (recipeQuery.isPending) {
        return <SkeletonDetails />
    }

    if (recipeQuery.isError) {
        return <div>{recipeQuery.error?.message}</div>
    }

    if (!recipeQuery.data) {
        return <div>No recipe found</div>
    }

    return (
        <div className="mb-8 flex flex-col gap-4">
            <RecipeCard recipe={recipeQuery.data} noLink />
            {/* Recipe Ingredients  */}
            <section>
                <h2 className="text-2xl font-bold">Ingredients</h2>
                <ul>
                    {recipeQuery.data?.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>
            {/* Recipe Instructions */}
            <section>
                <h2 className="text-2xl font-bold">Instructions</h2>
                <p>{recipeQuery.data?.instructions}</p>
            </section>
            {/* Recipe Comments     */}
            {recipeCommentsQuery.isPending ? (
                <SkeletonCard />
            ) : (
                <RecipeComments
                    recipeId={recipeId}
                    query={recipeCommentsQuery}
                />
            )}
        </div>
    )
}
