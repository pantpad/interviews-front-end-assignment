import { useState } from 'react'
import { endpoint, RecipeComment, submitComment } from '../../../api/recipe'
import { useData } from '../../../hooks/useData'
import SkeletonCard from '../SkeletonCard'

type RecipeCommentsProps = {
    recipeId: string | undefined
}

export function RecipeComments({ recipeId }: RecipeCommentsProps) {
    const {
        data: recipeComments,
        error,
        loading,
    } = useData(
        `${endpoint}/recipes/${recipeId}/comments`,
        [] as RecipeComment[]
    )

    const [recipeAddedComments, setRecipeAddedComments] = useState(
        [] as RecipeComment[]
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
        } else {
            console.log('Error adding Comment')
            console.log(response.statusText)
            alert('Error adding Comment')
        }
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            {recipeComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            {new Date(comment.date).toLocaleDateString(
                                'de-DE',
                                {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                }
                            )}
                        </p>
                        <p className="font-semibold">{comment.rating}</p>
                    </div>
                )
            })}
            {recipeAddedComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            {new Date(comment.date).toLocaleDateString(
                                'de-DE',
                                {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                }
                            )}
                        </p>
                        <p className="font-semibold">{comment.rating}</p>
                    </div>
                )
            })}
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
                        className="w-full rounded shadow"
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
                        className="h-8 w-64"
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
