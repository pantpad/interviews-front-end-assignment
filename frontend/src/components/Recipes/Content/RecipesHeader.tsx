export default function RecipesHeader() {
    return (
        <header>
            <p>Results for</p>
            <div className="flex justify-between gap-4">
                <h1>Recipes found for your search criteria</h1>
                <div className="relative inline-block">
                    <select
                        className="appearance-none rounded-md border border-zinc-300 bg-white px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="all"
                    >
                        <option value="all">Filter by</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten-free">Gluten-free</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}
