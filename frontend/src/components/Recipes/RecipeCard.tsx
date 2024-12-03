import { Link } from '@tanstack/react-router'
import { Recipe } from '../../api/recipe'
import { useRecipesContext } from '../../context/recipes-context'
interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const { name, image, cuisineId, dietId, difficultyId } = recipe
    const { cuisines, diets, difficulties } = useRecipesContext()
    console.log('QUI CI SONO I PARAMETRI DEL CONTEXT')
    console.log(cuisines, diets, difficulties)
    return (
        <Link to="/recipes/$recipeId" params={{ recipeId: recipe.id }}>
            <article className="flex flex-wrap overflow-hidden rounded-lg bg-white p-2 shadow transition hover:shadow-md">
                <figure className="relative w-full sm:max-w-64">
                    <img
                        src={`http://localhost:8080${image}`}
                        alt={name}
                        height={64}
                        width={64}
                        className="h-full w-full rounded-md object-cover"
                    />
                </figure>
                <div className="flex flex-1 flex-col justify-between px-2">
                    <section>
                        <h2 className="font-medium">{name}</h2>
                        <p>Cuisine: {cuisines[Number(cuisineId) - 1]?.name}</p>
                        <p>Diet: {diets[Number(dietId) - 1]?.name}</p>
                        <p>
                            Difficulty:{' '}
                            {difficulties[Number(difficultyId) - 1]?.name}
                        </p>
                    </section>
                    <button className="mt-4 w-full rounded-md bg-red-500 py-2 text-white">
                        View Options
                    </button>
                </div>
            </article>
        </Link>
    )
}
