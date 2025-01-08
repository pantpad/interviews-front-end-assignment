import { FC } from 'react'
import { RecipeCommentType } from '../../../api/recipe'
import { StarsRating } from './StarsRating.tsx'

const RecipeComment: FC<RecipeCommentType> = ({ comment, date, rating }) => {
    return (
        <div className="rounded border bg-white p-4 shadow">
            <p>{comment}</p>
            <p>
                {new Date(date).toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </p>
            <StarsRating rating={rating} />
        </div>
    )
}

export { RecipeComment }
