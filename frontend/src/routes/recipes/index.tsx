import { createFileRoute } from '@tanstack/react-router'
import { getRecipes } from '../../api/recipe'

import RecipesList from '../../components/Recipes/RecipesList'

export const Route = createFileRoute('/recipes/')({
    component: RouteComponent,
    loader: async ({ search }) => {
        getRecipes(1);

    },
})

function RouteComponent() {
    return (
        <div className="mx-auto w-full max-w-7xl p-2">
            <RecipesList />
        </div>
    )
}
