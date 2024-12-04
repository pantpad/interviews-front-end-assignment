import FiltersSection from './FiltersSection/FiltersSection'
import SearchSections from './SearchSections/SearchSections'

export default function RecipesSidebar() {
    return (
        <div className="flex w-full flex-col rounded-md bg-white p-4 shadow-md">
            <SearchSections />
            <FiltersSection />
        </div>
    )
}
