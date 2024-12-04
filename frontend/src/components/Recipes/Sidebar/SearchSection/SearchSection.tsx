import { useState } from 'react'
import { SearchTerm, SelectCategory, SelectCuisine, SelectPreference } from '.'
import { useSearchParams } from 'react-router'

const getNonEmptySearchParams = (
    name: string,
    category: string,
    cuisine: string,
    preference: string
) => {
    const params = [
        ['q', name],
        ['category', category],
        ['cuisine', cuisine],
        ['preference', preference],
    ]

    const nonEmptyParams = params.filter(([_, value]) => value !== '')
    return Object.fromEntries(nonEmptyParams)
}

export default function SearchSections() {
    const [_, setSearchParams] = useSearchParams()
    const [term, setTerm] = useState('')
    const [category, setCategory] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [preference, setPreference] = useState('')

    const handleSearch = () => {
        setSearchParams(
            getNonEmptySearchParams(term, category, cuisine, preference)
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
                <SelectCategory
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <SelectCuisine
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                />
                <SelectPreference
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
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
