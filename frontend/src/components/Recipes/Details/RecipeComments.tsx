import { useState } from 'react'
import { RecipeCommentType, submitComment } from '../../../api/recipe'
import { UseQueryResult } from '@tanstack/react-query'

import { RecipeComment } from './RecipeComment'

function sortByRecent(a: RecipeCommentType, b: RecipeCommentType) {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA.getTime() > dateB.getTime()) return -1
    else return 1
}

type RecipeCommentsProps = {
    recipeId: string
    query: UseQueryResult<RecipeCommentType[], Error>
}

export function RecipeComments({ recipeId, query }: RecipeCommentsProps) {
    const [recipeAddedComments, setRecipeAddedComments] = useState<
        RecipeCommentType[]
    >([])

    const {
        isRefetching,
        data: recipeComments,
        isError,
        error,
        isFetchedAfterMount,
    } = query

    if (isError) {
        return <div>{error?.message}</div>
    }

    if (!recipeComments) {
        return <div>No recipe comments found</div>
    }

    if (isRefetching && recipeAddedComments.length > 0) {
        if (isFetchedAfterMount) setRecipeAddedComments([])
    }

    async function submitComments(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // Capture the form element immediately to avoid using useRef
        const formElement = e.currentTarget

        const formData = new FormData(formElement)
        const response = await submitComment(formData, recipeId)

        if (response.ok) {
            console.log('Comment added successfully')
            console.log(response.statusText)
            const responseData = await response.json()
            setRecipeAddedComments((prev) => [responseData, ...prev])
            formElement.reset()
        } else {
            console.log('Error adding Comment')
            console.log(response.statusText)
            alert('Error adding Comment')
        }
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            <form onSubmit={submitComments}>
                <div>
                    <label htmlFor="comment" className="block">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        required
                        rows={4}
                        minLength={3}
                        title="min character lenght is 3"
                        className="w-full rounded p-4 shadow"
                        placeholder="Add your review here..."
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block">
                        Rating
                    </label>
                    <input
                        id="rating"
                        name="rating"
                        type="number"
                        min={1}
                        max={5}
                        required
                        className="w-64 rounded p-2"
                        placeholder="Add your rating"
                    />
                </div>
                <button
                    type="submit"
                    className="ml-auto mt-4 block rounded bg-red-500 px-2 py-1 text-white"
                >
                    Submit Review
                </button>
            </form>
            {recipeAddedComments.map((comment) => (
                <RecipeComment key={comment.id} {...comment} />
            ))}
            {recipeComments.sort(sortByRecent).map((comment) => (
                <RecipeComment key={comment.id} {...comment} />
            ))}
        </section>
    )
}
