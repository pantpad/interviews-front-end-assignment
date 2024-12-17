import { FC } from 'react'
import { RecipeCommentType } from '../../../api/recipe'

const RecipeComment: FC<RecipeCommentType> = ({ comment, date, rating }) => {
    return (
        <div className="rounded border bg-white p-4 shadow">
            <p>{comment}</p>
            <p>
                {new Date(date).toLocaleDateString('de-DE', {
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
