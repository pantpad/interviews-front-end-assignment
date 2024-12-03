import { Link } from 'react-router'
import { useState } from 'react'

export default function RecipesPagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages: number = 25

    return (
        <nav className="flex items-center justify-center gap-2">
            <Link to="/recipes" onClick={() => setCurrentPage(currentPage - 1)}>
                <button
                    disabled={currentPage === 1}
                    className={`flex h-8 items-center justify-center rounded-full px-3 ${
                        currentPage === 1
                            ? 'text-gray-300'
                            : 'hover:bg-gray-100'
                    } `}
                >
                    ←
                </button>
            </Link>

            <div
                className={`flex h-8 min-w-[32px] items-center justify-center rounded-full bg-red-500 px-3 text-white`}
            >
                {currentPage}
            </div>

            <Link to="/recipes" onClick={() => setCurrentPage(currentPage + 1)}>
                <button
                    disabled={currentPage === totalPages}
                    className={`flex h-8 items-center justify-center rounded-full px-3 ${
                        currentPage === totalPages
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
