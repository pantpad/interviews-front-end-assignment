export default function RecipesPagination() {
    return (
        <nav className="flex items-center gap-1">
            {[1, 2, 3, 4, '...', 25].map((page, index) => (
                <button
                    key={index}
                    className={`flex h-8 min-w-[32px] items-center justify-center rounded-full px-3 ${
                        page === 1
                            ? 'bg-red-500 text-white'
                            : 'hover:bg-gray-100'
                    } `}
                >
                    {page}
                </button>
            ))}
        </nav>
    )
}
