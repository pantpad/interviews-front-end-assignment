import SearchName from './SearchName'
import SelectCategory from './SelectCategory'
import SelectCuisine from './SelectCuisine'
import SelectPreference from './SelectPreference'
import RecipeFilters from './RecipeFilters'
import IngredientsList from './IngredientsList'
import UserReviews from './UserReviews'
import RecipeDifficulty from './RecipeDifficulty'

export default function RecipesSidebar() {
    return (
        <div className="flex w-full flex-col rounded-md bg-white p-4 shadow-md">
            {/* Search Section */}
            <div className="mb-6">
                <h2 className="mb-4 text-lg font-semibold">Discover recipes</h2>

                <div className="space-y-4">
                    <SearchName />
                    <SelectCategory />
                    <SelectCuisine />
                    <SelectPreference />
                    <button className="w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600">
                        Search
                    </button>
                </div>
            </div>

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
