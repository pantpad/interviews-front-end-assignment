import { Link } from 'react-router'
import { LIMIT } from '../../../api/recipe'

import useMySearchParams from '../../../hooks/useMySearchParams'
import { usePaginatedRecipes } from '../../../hooks/usePaginatedRecipes'

export default function RecipesPagination() {
    const { page, queryParamsString } = useMySearchParams()
    const { data = [], isPlaceholderData } = usePaginatedRecipes()

    if (data?.length === 0) {
        return (
            <nav className="flex items-center justify-center gap-2">
                <Link to={`/recipes`}>
                    <div
                        className={`flex h-8 min-w-[32px] items-center justify-center rounded-full bg-red-500 px-3 text-white`}
                    >
                        Go back to recipes
                    </div>
                </Link>
            </nav>
        )
    }

    return (
        <nav className="flex items-center justify-center gap-2">
            <Link to={`/recipes?_page=${page - 1}&${queryParamsString}`}>
                <button
                    disabled={isPlaceholderData || page === 1}
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

            <Link to={`/recipes?_page=${page + 1}&${queryParamsString}`}>
                <button
                    disabled={isPlaceholderData || data?.length < LIMIT}
                    className={`flex h-8 items-center justify-center rounded-full px-3 ${
                        data?.length < LIMIT
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
