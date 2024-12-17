import { useRef, useState } from 'react'
import { endpoint, RecipeCommentType, submitComment } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'

import { RecipeComment } from './RecipeComment'
import SkeletonCard from '../SkeletonCard'

type RecipeCommentsProps = {
    recipeId: string | undefined
}

export function RecipeComments({ recipeId }: RecipeCommentsProps) {
    const formRef = useRef<HTMLFormElement>(null)

    const {
        data: recipeComments,
        error,
        loading,
    } = useData(
        `${endpoint}/recipes/${recipeId}/comments`,
        [] as RecipeCommentType[]
    )

    const [recipeAddedComments, setRecipeAddedComments] = useState(
        [] as RecipeCommentType[]
    )

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading) {
        return <SkeletonCard />
    }

    if (!recipeComments) {
        return <div>No recipe comments found</div>
    }

    async function submitComments(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const response = await submitComment(formData, recipeId)

        if (response.ok) {
            console.log('Comment added successfully')
            console.log(response.statusText)
            const responseData = await response.json()
            setRecipeAddedComments((prev) => [...prev, responseData])
            formRef.current?.reset()
        } else {
            console.log('Error adding Comment')
            console.log(response.statusText)
            alert('Error adding Comment')
        }
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            {recipeComments.map((comment) => (
                <RecipeComment key={comment.id} {...comment} />
            ))}
            {recipeAddedComments.map((comment) => (
                <RecipeComment key={comment.id} {...comment} />
            ))}
            <form onSubmit={submitComments} ref={formRef}>
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
        </section>
    )
}
