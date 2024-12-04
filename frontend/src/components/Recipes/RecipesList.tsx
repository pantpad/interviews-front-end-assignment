import { RecipeCard } from '.'
import { Recipe } from '../../api/recipe'

export default function RecipesList({ recipes }: { recipes: Recipe[] }) {
    if (recipes.length === 0) {
        return <div>No recipes found</div>
    }

    return (
        <div className="flex flex-col gap-4">
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </div>
    )
}
