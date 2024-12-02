import { useLoaderData } from '@tanstack/react-router'

import RecipesHeader from './RecipesHeader'
import RecipesPagination from './RecipesPagination'

export default function RecipesList() {
    const recipes = useLoaderData({ from: '/recipes/' })

    return (
        <section>
            <RecipesHeader />
            <div className="flex flex-col gap-4">
                {recipes.map((recipe) => {
                    return <div key={recipe.id}>{recipe.name}</div>
                })}
            </div>
            <RecipesPagination />
        </section>
    )
}
