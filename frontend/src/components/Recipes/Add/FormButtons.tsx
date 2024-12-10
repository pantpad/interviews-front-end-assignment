export default function FormButtons() {
    return (
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
    )
}
