import { useState } from 'react'
import { SearchTerm, SelectCuisine, SelectPreference } from '.'
import { useSearchParams } from 'react-router'

import { getNonEmptySearchParams } from '../../../../utils/searchParams'

export default function SearchSections() {
    const [_, setSearchParams] = useSearchParams()

    const [term, setTerm] = useState('')
    const [cuisineId, setCuisineId] = useState('')
    const [dietId, setDietId] = useState('')

    const handleSearch = () => {
        setSearchParams(
            getNonEmptySearchParams({
                q: term,
                cuisineId,
                dietId,
                difficultyId: '',
            })
        )
    }

    return (
        <div className="mb-6">
            <h2 className="mb-4 text-lg font-semibold">Discover recipes</h2>
            <div className="space-y-4">
                <SearchTerm
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <SelectCuisine
                    value={cuisineId}
                    onChange={(e) => setCuisineId(e.target.value)}
                />
                <SelectPreference
                    value={dietId}
                    onChange={(e) => setDietId(e.target.value)}
                />
                <button
                    className="w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    )
}
