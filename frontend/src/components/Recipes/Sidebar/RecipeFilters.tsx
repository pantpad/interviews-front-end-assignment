export default function RecipeFilters() {
    return (
        <div>
            <h3 className="mb-2 font-semibold">Recipe filters</h3>
            <div className="space-y-2">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Vegetarian recipes</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Gluten-free options</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Low-carb recipes</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Vegetarian Recipes</span>
                </label>
            </div>
        </div>
    )
} 