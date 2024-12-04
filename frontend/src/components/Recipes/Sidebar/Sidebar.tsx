import {
    RecipeFilters,
    IngredientsList,
    UserReviews,
    RecipeDifficulty,
} from './'
import SearchSections from './SearchSections/SearchSections'

export default function RecipesSidebar() {
    return (
        <div className="flex w-full flex-col rounded-md bg-white p-4 shadow-md">
            {/* Search Section */}
            <SearchSections />
            {/* Filters Section */}
            <div className="space-y-6">
                <RecipeFilters />
                <IngredientsList />
                <UserReviews />
                <RecipeDifficulty />
            </div>
        </div>
    )
}
