export default function IngredientsList() {
    return (
        <div>
            <h3 className="mb-2 font-semibold">Ingredients list</h3>
            <div className="space-y-2">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Quick and Easy</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Healthy Choices</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Family-Friendly</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Special Occasions</span>
                </label>
            </div>
        </div>
    )
} 