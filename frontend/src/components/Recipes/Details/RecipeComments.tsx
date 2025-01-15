import { useState } from 'react'
import { RecipeCommentType, submitComment } from '../../../api/recipe'

import { useRecipeComments } from '../../../hooks/useRecipeComments'

import { RecipeComment } from './RecipeComment'
import SkeletonCard from '../SkeletonCard'

type RecipeCommentsProps = {
    recipeId: string
}

function sortByRecent(a: RecipeCommentType, b: RecipeCommentType) {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA.getTime() > dateB.getTime()) return -1
    else return 1
}

export function RecipeComments({ recipeId }: RecipeCommentsProps) {
    const {
        data: recipeComments = [],
        error,
        isPending,
        isError,
    } = useRecipeComments(recipeId)

    const [recipeAddedComments, setRecipeAddedComments] = useState<
        RecipeCommentType[]
    >([])

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    if (isPending) {
        return <SkeletonCard />
    }

    if (!recipeComments) {
        return <div>No recipe comments found</div>
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
                        minLength={10}
                        rows={4}
                        title="min character lenght is 10"
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
