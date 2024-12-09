import { endpoint } from '../../../api/recipe'

export default function RecipeForm() {
    return (
        <>
            <form
                className="flex flex-col gap-4"
                action={`${endpoint}/recipes`}
                method="POST"
                encType="multipart/form-data"
            >
                <div className="[&>*]:block">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" name="instructions" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="cuisine">Cuisine</label>
                    <input type="number" id="cuisine" name="cuisineId" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="dietary">Dietary</label>
                    <input type="number" id="dietary" name="dietaryId" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="difficulty">Difficulty</label>
                    <input type="number" id="difficulty" name="difficultyId" />
                </div>
                <div className="[&>*]:block">
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white"
                    >
                        Add new recipe
                    </button>
                    <button
                        type="reset"
                        className="rounded-md bg-gray-500 px-4 py-2 text-white"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    )
}
