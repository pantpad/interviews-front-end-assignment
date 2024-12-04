import {
    RecipeFilters,
    IngredientsList,
    UserReviews,
    RecipeDifficulty,
} from '..'

export default function FiltersSection() {
    return (
        <div className="space-y-6">
            <RecipeFilters />
            <IngredientsList />
            <UserReviews />
            <RecipeDifficulty />
        </div>
    )
}
