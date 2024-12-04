import { SearchName, SelectCategory, SelectCuisine, SelectPreference } from '.'

export default function SearchSections() {
    return (
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
    )
}
