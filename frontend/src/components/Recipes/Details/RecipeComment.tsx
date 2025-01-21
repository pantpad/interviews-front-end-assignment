import { FC } from 'react'
import { RecipeCommentType } from '../../../api/recipe'
import { useMutationState } from '@tanstack/react-query'
import { mutationKey } from '../../../hooks/useSubmitComment'

const RecipeComment: FC<RecipeCommentType> = ({ comment, date, rating }) => {
    const data = useMutationState({ filters: { mutationKey } })
    const isPending = data[data.length - 1]?.status === 'pending'

    return (
        <div
            className={`rounded border bg-white p-4 shadow ${
                isPending ? 'animate-pulse opacity-50' : ''
            }`}
        >
            <p>{comment}</p>
            <p>
                {new Date(date).toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </p>
            <p className="font-semibold text-yellow-500">{rating}</p>
        </div>
    )
}

export { RecipeComment }
