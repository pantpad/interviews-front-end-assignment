import { createFileRoute } from '@tanstack/react-router'
import { getRecipe } from '../../api/recipe'
import { RecipeCard } from '../../components/Recipes'

export const Route = createFileRoute('/recipes/$recipeId')({
    component: RouteComponent,
    loader: ({ params }) => getRecipe(params.recipeId),
})

function RouteComponent() {
    const recipe = Route.useLoaderData()

    return (
        <section className="mx-auto w-full max-w-7xl p-2">
            <RecipeCard recipe={recipe} />
        </section>
    )
}
