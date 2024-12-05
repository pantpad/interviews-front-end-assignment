import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export default function RecipeDifficulty() {
    const [searchParams, setSearchParams] = useSearchParams()
    const difficultyId = searchParams.get('difficultyId') || ''
    const [difficulty, setDifficulty] = useState(difficultyId)

    const handleDifficultyChange = (difficulty: string) => {
        setDifficulty(difficulty)
    }

    useEffect(() => {
        if (difficulty === '') {
            searchParams.delete('difficultyId')
            return setSearchParams(searchParams)
        }

        setSearchParams((prev) => {
            prev.set('difficultyId', difficulty)
            return prev
        })
    }, [difficulty])

    return (
        <div>
            <h3 className="mb-2 font-semibold">Recipe Difficulty</h3>
            <div className="flex flex-wrap gap-2">
                {['Easy', 'Medium', 'Hard'].map((level, index) => (
                    <button
                        aria-selected={difficulty === String(index + 1)}
                        aria-label={level}
                        key={level}
                        className="rounded-full border border-gray-300 px-3 py-1 text-sm transition-colors hover:bg-gray-100 aria-[selected=true]:aria-[label=Easy]:bg-green-500 aria-[selected=true]:aria-[label=Hard]:bg-red-500 aria-[selected=true]:aria-[label=Medium]:bg-yellow-500 aria-[selected=true]:text-zinc-50"
                        onClick={() =>
                            handleDifficultyChange(String(index + 1))
                        }
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    )
}
