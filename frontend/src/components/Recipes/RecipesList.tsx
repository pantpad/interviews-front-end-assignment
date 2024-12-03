import { RecipeCard, RecipesPagination, RecipesHeader } from '.'
import { Recipe } from '../../api/recipe'

export default function RecipesList() {
    const recipes: Recipe[] = []

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <div className="flex flex-col gap-4">
                {recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} />
                })}
            </div>
            <RecipesPagination />
        </section>
    )
}
