import { RecipesPagination, RecipesHeader } from '.'
import { Recipe, endpoint } from '../../api/recipe'

import { useData } from '../../hooks/useData'
import RecipesList from './RecipesList'
import { useSearchParams } from 'react-router'

export default function Recipes() {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get('_page')) || 1

    const { data: totalRecipes } = useData<Recipe[]>(`${endpoint}/recipes`)

    const totalPages = Math.ceil((totalRecipes?.length || 0) / 10)

    const {
        data: recipes,
        error,
        loading,
    } = useData<Recipe[]>(`${endpoint}/recipes?_page=${page}`)

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (loading || totalRecipes?.length === 0) {
        return <div>Loading...</div>
    }

    if (!recipes) {
        return <div>No recipes found</div>
    }

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList recipes={recipes} />
            <RecipesPagination page={page} totalPages={totalPages} />
        </section>
    )
}
