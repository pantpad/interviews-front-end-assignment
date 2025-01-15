import { Link } from 'react-router'
import { getRecipe, Recipe } from '../../api/recipe'
import { useState } from 'react'
import useRecipeDetails from '../../hooks/useRecipeDetails.tsx'
import { useQueryClient } from '@tanstack/react-query'

type RecipeCardProps = {
    recipe: Recipe
    noLink?: boolean
}

export default function RecipeCard({ recipe, noLink }: RecipeCardProps) {
    const { name, image, cuisineId, dietId, difficultyId, id } = recipe
    const { cuisines, diets, difficulties } = useRecipeDetails()
    const [isLoading, setIsLoading] = useState(true)

    const queryClient = useQueryClient()

    const fullImageUrl = `${import.meta.env.VITE_API_ENDPOINT}${image}`

    const loadingImage = isLoading ? (
        <div className="absolute inset-0 aspect-square h-full w-full animate-pulse rounded-md bg-gray-200" />
    ) : null

    return (
        <Link
            to={`/recipes/${id}`}
            onMouseEnter={() => {
                if (noLink) return
                queryClient.prefetchQuery({
                    queryKey: ['recipe', { recipeId: id }],
                    queryFn: () => getRecipe(id),
                    staleTime: 10000,
                })
            }}
        >
            <article
                data-clickable={!noLink}
                className="flex select-text flex-wrap overflow-hidden rounded-lg bg-white p-2 shadow transition hover:shadow-md data-[clickable=true]:hover:scale-[1.01] data-[clickable=true]:hover:opacity-80"
            >
                <figure className="relative h-full w-full sm:max-w-64">
                    <>
                        {loadingImage}
                        <img
                            src={fullImageUrl}
                            alt={name}
                            height={64}
                            width={64}
                            className="aspect-square h-full w-full rounded-md object-cover aria-busy:opacity-0"
                            onLoad={() => setIsLoading(false)}
                            aria-busy={isLoading}
                        />
                    </>
                </figure>
                <div className="flex flex-1 flex-col justify-between px-2">
                    <section>
                        <h2 className="font-medium">{name}</h2>
                        <p>Cuisine: {cuisines[Number(cuisineId)]}</p>
                        <p>Diet: {diets[Number(dietId)]}</p>
                        <p>Difficulty: {difficulties[Number(difficultyId)]}</p>
                    </section>
                </div>
            </article>
        </Link>
    )
}
