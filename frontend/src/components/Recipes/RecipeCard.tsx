import { Link } from '@tanstack/react-router'
import { Recipe } from '../../api/recipe'

interface RecipeCardProps {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const { name, image } = recipe
    console.log(image)

    return (
        <Link to="/recipes/$recipeId" params={{ recipeId: recipe.id }}>
            <article className="flex overflow-hidden rounded-lg bg-white p-2 shadow transition hover:shadow-md">
                <figure className="relative w-64">
                    <img
                        src={`http://localhost:8080${image}`}
                        alt={name}
                        height={192}
                        width={192}
                        className="h-full w-full rounded-md object-cover"
                    />
                </figure>
                <div className="p-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="font-medium">{name}</h2>
                            <p className="text-sm text-gray-400">
                                Dessert Lovers' Paradise
                            </p>
                            <p className="text-sm text-gray-400">
                                Decadent Desserts
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1">
                                <span className="text-sm">Sweet</span>
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-sm">
                                    8.2
                                </span>
                            </div>
                            <p className="text-xs text-gray-400">300 Reviews</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-medium">Chocolate Delights</h3>
                        <p className="text-sm text-gray-600">
                            1x Baking Pan, 1x Whisk
                        </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-medium">$20</span>
                        <div className="text-right text-sm text-gray-500">
                            <p>45 Minutes</p>
                            <p>6 Servings</p>
                        </div>
                    </div>

                    <button className="mt-4 w-full rounded-md bg-red-500 py-2 text-white">
                        View Options
                    </button>
                </div>
            </article>
        </Link>
    )
}
