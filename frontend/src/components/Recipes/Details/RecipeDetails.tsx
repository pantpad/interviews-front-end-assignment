import { useParams } from 'react-router'
import { useRecipe } from '../../../hooks/useRecipe'

import { RecipeCard } from '..'

import { RecipeComments } from './RecipeComments'
import { SkeletonDetails } from './SkeletonDetails'

export default function RecipeDetails() {
    const { recipeId } = useParams()
    if (!recipeId) throw new Error('RecipeId missing in url')

    const { data, isPending, isError, error } = useRecipe(recipeId)

    if (isPending) {
        return <SkeletonDetails />
    }

    if (isError) {
        return <div>{error?.message}</div>
    }

    if (!data) {
        return <div>No recipe found</div>
    }

    return (
        <div className="mb-8 flex flex-col gap-4">
            <RecipeCard recipe={data} noLink />
            <section>
                <h2 className="text-2xl font-bold">Ingredients</h2>
                <ul>
                    {data?.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-bold">Instructions</h2>
                <p>{data?.instructions}</p>
            </section>
            <RecipeComments recipeId={recipeId} />
        </div>
    )
}
