import { RecipesPagination, RecipesHeader } from '..'

import RecipesList from './RecipesList'

export default function RecipesContent() {
    return (
        <div className="flex flex-col gap-4">
            <RecipesHeader />
            <RecipesList />
            <RecipesPagination />
        </div>
    )
}
