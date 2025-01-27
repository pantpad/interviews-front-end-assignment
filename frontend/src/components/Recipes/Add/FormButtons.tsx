export default function FormButtons() {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            <button
                type="submit"
                className="flex-1 basis-[200px] rounded-md bg-blue-500 px-4 py-2 text-white"
            >
                Add new recipe
            </button>
            <button
                type="reset"
                className="flex-1 rounded-md bg-gray-500 px-4 py-2 text-white sm:flex-[0]"
            >
                Clear
            </button>
        </div>
    )
}
