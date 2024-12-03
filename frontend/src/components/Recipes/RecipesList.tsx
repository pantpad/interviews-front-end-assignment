import { RecipeCard } from '.'
import { Recipe } from '../../api/recipe'

export default function RecipesList({ recipes }: { recipes: Recipe[] }) {
    console.log(recipes)

    return (
        <div className="flex flex-col gap-4">
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} />
            })}
        </div>
    )
}
