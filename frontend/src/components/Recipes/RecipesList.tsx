import { useLoaderData } from '@tanstack/react-router'

import { RecipeCard, RecipesPagination, RecipesHeader } from '.'

export default function RecipesList() {
    const recipes = useLoaderData({ from: '/recipes/' })

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <div className="flex flex-col gap-4">
                {recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} />
                })}
            </div>
            <RecipesPagination />
        </section>
    )
}
