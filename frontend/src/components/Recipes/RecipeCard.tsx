import { Link } from 'react-router'
import { Recipe } from '../../api/recipe'
import { useRecipesContext } from '../../context/recipes-context'
import { Image } from '../ui/Image'
type RecipeCardProps = {
    recipe: Recipe
    noLink?: boolean
}

export default function RecipeCard({ recipe, noLink }: RecipeCardProps) {
    const { name, image, cuisineId, dietId, difficultyId, id } = recipe
    const { cuisines, diets, difficulties } = useRecipesContext()

    console.log(image)

    const fullImageUrl = `http://localhost:8080${image}`
    const thumbnailUrl = `${fullImageUrl}?tr=w-64,h-64`

    return (
        <Link to={`/recipes/${id}`}>
            <article className="flex flex-wrap overflow-hidden rounded-lg bg-white p-2 shadow transition hover:shadow-md">
                <figure className="relative h-full w-full sm:max-w-64">
                    <Image
                        src={fullImageUrl}
                        thumbnailSrc={thumbnailUrl}
                        alt={name}
                        className="aspect-square h-full w-full rounded-md object-cover"
                    />
                </figure>
                <div className="flex flex-1 flex-col justify-between px-2">
                    <section>
                        <h2 className="font-medium">{name}</h2>
                        <p>Cuisine: {cuisines[Number(cuisineId)]}</p>
                        <p>Diet: {diets[Number(dietId)]}</p>
                        <p>Difficulty: {difficulties[Number(difficultyId)]}</p>
                    </section>
                    {!noLink ? (
                        <button className="mt-4 w-full rounded-md bg-red-500 py-2 text-white">
                            View Options
                        </button>
                    ) : null}
                </div>
            </article>
        </Link>
    )
}
