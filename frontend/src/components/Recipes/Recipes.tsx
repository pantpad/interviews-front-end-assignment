import { RecipesPagination, RecipesHeader } from '.'
import { LIMIT, Recipe, endpoint } from '../../api/recipe'

import { useData } from '../../hooks/useData'
import RecipesList from './RecipesList'
import { useSearchParams } from 'react-router'

export default function Recipes() {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get('_page')) || 1

    // Get total number of recipes
    const { data: totalRecipes } = useData<Recipe[]>(`${endpoint}/recipes`, [])
    const totalPages = Math.ceil((totalRecipes?.length || 0) / LIMIT)

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList />
            <RecipesPagination page={page} totalPages={totalPages} />
        </section>
    )
}
