import { createFileRoute } from '@tanstack/react-router'
import {
    getCuisines,
    getDiets,
    getDifficulties,
    getRecipes,
} from '../../api/recipe'

import RecipesList from '../../components/Recipes/RecipesList'

export const Route = createFileRoute('/recipes/')({
    component: RouteComponent,
    loader: async () => {
        return {
            recipes: await getRecipes(1),
            cuisines: await getCuisines(),
            diets: await getDiets(),
            difficulties: await getDifficulties(),
        }
    },
})

function RouteComponent() {
    return (
        <div className="mx-auto w-full max-w-7xl p-2">
            <RecipesList />
        </div>
    )
}
