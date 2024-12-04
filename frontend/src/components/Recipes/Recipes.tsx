import { useState } from 'react'

import { RecipesPagination, RecipesHeader } from '.'
import { Recipe, endpoint } from '../../api/recipe'

import { useData } from '../../hooks/useData'
import RecipesList from './RecipesList'

export default function Recipes() {
    const [page, setPage] = useState(1)

    const {
        data: recipes,
        error,
        loading,
    } = useData<Recipe[]>(`${endpoint}/recipes?_page=${page}`)

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
            <RecipesPagination page={page} setPage={setPage} />
        </section>
    )
}
