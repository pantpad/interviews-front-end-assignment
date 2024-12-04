import { RecipesPagination, RecipesHeader } from '.'
import { Recipe, endpoint } from '../../api/recipe'

import { useData } from '../../hooks/useData'
import RecipesList from './RecipesList'
import { useSearchParams } from 'react-router'

const LIMIT = 4

export default function Recipes() {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get('_page')) || 1

    // Get total number of recipes
    const { data: totalRecipes } = useData<Recipe[]>(`${endpoint}/recipes`, [])
    const totalPages = Math.ceil((totalRecipes?.length || 0) / LIMIT)

    const {
        data: recipes = [],
        error,
        loading,
    } = useData<Recipe[]>(
        `${endpoint}/recipes?_page=${page}&_limit=${LIMIT}&_expand=difficulty`,
        []
    )

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (loading || totalRecipes?.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <section className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList recipes={recipes} />
            <RecipesPagination page={page} totalPages={totalPages} />
        </section>
    )
}
