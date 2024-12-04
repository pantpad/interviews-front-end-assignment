export default function RecipeDifficulty() {
    return (
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
    )
} 