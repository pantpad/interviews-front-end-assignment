import { useState } from 'react'
import SearchName from './SearchName'

export default function RecipesSidebar() {
    const [category, setCategory] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [preference, setPreference] = useState('')

    return (
        <div className="flex w-full flex-col rounded-md bg-white p-4 shadow-md">
            {/* Search Section */}
            <div className="mb-6">
                <h2 className="mb-4 text-lg font-semibold">Discover recipes</h2>

                <div className="space-y-4">
                    <SearchName />
                    <div>
                        <label className="mb-1 block text-sm">
                            Select category
                        </label>
                        <select
                            className="w-full rounded-md border p-2 text-gray-500"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Choose category</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm">
                            Select cuisine
                        </label>
                        <select
                            className="w-full rounded-md border p-2 text-gray-500"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                        >
                            <option value="">Choose cuisine</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm">
                            Select dietary preference
                        </label>
                        <select
                            className="w-full rounded-md border p-2 text-gray-500"
                            value={preference}
                            onChange={(e) => setPreference(e.target.value)}
                        >
                            <option value="">Choose preference</option>
                        </select>
                    </div>

                    <button className="w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600">
                        Search
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="space-y-6">
                <div>
                    <h3 className="mb-2 font-semibold">Recipe filters</h3>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Vegetarian recipes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Gluten-free options</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Low-carb recipes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Vegetarian Recipes</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold">Ingredients list</h3>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Quick and Easy</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Healthy Choices</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Family-Friendly</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Special Occasions</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold">User Reviews</h3>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>All Ratings</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>5 Stars</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>4 Stars</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="rounded text-red-500"
                            />
                            <span>Beginner-Friendly</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h3 className="mb-2 font-semibold">Recipe Difficulty</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Easy', 'Medium', 'Hard'].map((level) => (
                            <button
                                key={level}
                                className="rounded-full border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
