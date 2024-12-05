import { Link, useSearchParams } from 'react-router'
import { Recipe, endpoint, LIMIT } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'

import { getQueryParamsString } from '../../../utils/searchParams'

export default function RecipesPagination() {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get('_page')) || 1
    const term = searchParams.get('q') || ''
    const cuisineId = searchParams.get('cuisineId') || ''
    const dietId = searchParams.get('dietId') || ''

    const queryParamsString = getQueryParamsString(term, cuisineId, dietId)

    // Get total number of recipes
    const { data: totalRecipes } = useData<Recipe[]>(
        `${endpoint}/recipes?${queryParamsString}`,
        []
    )
    const totalPages = Math.ceil((totalRecipes?.length || 0) / LIMIT)

    if (page > totalPages) {
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

            <Link to={`/recipes?_page=${page + 1}&${queryParamsString}`}>
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
