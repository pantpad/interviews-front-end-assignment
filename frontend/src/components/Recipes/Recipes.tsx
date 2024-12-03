import { RecipesPagination, RecipesHeader } from '.'
import RecipesList from './RecipesList'

export default function Recipes() {
    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList />
            <RecipesPagination />
        </section>
    )
}
