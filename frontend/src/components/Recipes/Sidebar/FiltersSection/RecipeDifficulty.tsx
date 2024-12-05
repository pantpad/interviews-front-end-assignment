import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export default function RecipeDifficulty() {
    const [searchParams, setSearchParams] = useSearchParams()
    const difficultyId = searchParams.get('difficultyId') || ''

    const [difficulty, setDifficulty] = useState(difficultyId)

    const handleDifficultyChange = (difficulty: string) => {
        if (difficulty === '0') {
            setDifficulty('All')
            return
        }
        setDifficulty(difficulty)
    }

    useEffect(() => {
        if (difficulty === '' || difficulty === 'All') {
            searchParams.delete('difficultyId')
            return setSearchParams(searchParams)
        }

        setSearchParams((prev) => {
            prev.set('_page', '1')
            prev.set('difficultyId', difficulty)
            return prev
        })
    }, [difficulty])

    return (
        <div>
            <h3 className="mb-2 font-semibold">Recipe Difficulty</h3>
            <div className="flex flex-wrap gap-2">
                {['All', 'Easy', 'Medium', 'Hard'].map((level, index) => (
                    <button
                        aria-selected={difficultyId === String(index)}
                        aria-label={level}
                        key={level}
                        className="rounded-full border border-gray-300 px-3 py-1 text-sm transition-colors hover:bg-gray-100 aria-[selected=true]:aria-[label=Easy]:bg-green-500 aria-[selected=true]:aria-[label=Hard]:bg-red-500 aria-[selected=true]:aria-[label=Medium]:bg-yellow-500 aria-[selected=true]:text-zinc-50"
                        onClick={() => handleDifficultyChange(String(index))}
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    )
}
