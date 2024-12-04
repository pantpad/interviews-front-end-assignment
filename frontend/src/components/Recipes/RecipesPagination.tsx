import { Link } from 'react-router'

type RecipesPaginationProps = {
    page: number
    setPage: (page: number) => void
    totalPages: number
}

export default function RecipesPagination({
    page,
    setPage,
    totalPages,
}: RecipesPaginationProps) {
    return (
        <nav className="flex items-center justify-center gap-2">
            <Link to="/recipes" onClick={() => setPage(page - 1)}>
                <button
                    disabled={page === 1}
                    className={`flex h-8 items-center justify-center rounded-full px-3 ${
                        page === 1 ? 'text-gray-300' : 'hover:bg-gray-100'
                    } `}
                >
                    ←
                </button>
            </Link>

            <div
                className={`flex h-8 min-w-[32px] items-center justify-center rounded-full bg-red-500 px-3 text-white`}
            >
                {page}
            </div>

            <Link to="/recipes" onClick={() => setPage(page + 1)}>
                <button
                    disabled={page === totalPages}
                    className={`flex h-8 items-center justify-center rounded-full px-3 ${
                        page === totalPages
                            ? 'text-gray-300'
                            : 'hover:bg-gray-100'
                    } `}
                >
                    →
                </button>
            </Link>
        </nav>
    )
}
