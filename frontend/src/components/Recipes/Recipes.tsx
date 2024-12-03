import { RecipesPagination, RecipesHeader } from '.'
import { Recipe, endpoint } from '../../api/recipe'

import { useData } from '../../hooks/useData'
import RecipesList from './RecipesList'

export default function Recipes() {
    const {
        data: recipes,
        error,
        loading,
    } = useData<Recipe[]>(`${endpoint}/recipes`)

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!recipes) {
        return <div>No recipes found</div>
    }

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList recipes={recipes} />
            <RecipesPagination />
        </section>
    )
}
