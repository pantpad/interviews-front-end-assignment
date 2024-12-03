import { createFileRoute, Outlet } from '@tanstack/react-router'
import RecipesProvider from '../context/recipes-context'
import { getCuisines, getDiets, getDifficulties } from '../api/recipe'

export const Route = createFileRoute('/recipes')({
    component: RouteComponent,
    loader: async () => {
        return {
            cuisines: await getCuisines(),
            diets: await getDiets(),
            difficulties: await getDifficulties(),
        }
    },
    staleTime: Infinity,
})

function RouteComponent() {
    return (
        <RecipesProvider>
            <Outlet />
        </RecipesProvider>
    )
}
