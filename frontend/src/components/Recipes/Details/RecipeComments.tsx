import { RecipeCommentType } from '../../../api/recipe'

import { RecipeComment } from './RecipeComment'
import { useSubmitComment } from '../../../hooks/useSubmitComment'
import { useRecipeComments } from '../../../hooks/useRecipeComments'

import SkeletonCard from '../SkeletonCard'

function sortByRecent(a: RecipeCommentType, b: RecipeCommentType) {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA.getTime() > dateB.getTime()) return -1
    else return 1
}

type RecipeCommentsProps = {
    recipeId: string
}

export function RecipeComments({ recipeId }: RecipeCommentsProps) {
    const { mutate, isPending: isPendingSubmitComment } = useSubmitComment()

    const {
        data: recipeComments,
        error,
        isPending,
        isError,
    } = useRecipeComments(recipeId)

    if (isError) {
        return <div>{error?.message}</div>
    }

    if (isPending) {
        return Array.from({ length: 1 }).map((_, index) => (
            <SkeletonCard key={index} />
        ))
    }

    if (!recipeComments) {
        return <div>No recipe comments found</div>
    }

    async function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // Capture the form element immediately to avoid using useRef
        const formElement = e.currentTarget

        const formData = new FormData(formElement)
        mutate(
            { formData, recipeId },
            {
                onSuccess: () => {
                    formElement.reset()
                },
            }
        )
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            <form onSubmit={handleSubmitComment}>
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
                    className={`ml-auto mt-4 block rounded bg-red-500 px-2 py-1 text-white ${
                        isPendingSubmitComment ? 'opacity-50' : ''
                    }`}
                    disabled={isPendingSubmitComment}
                >
                    Submit Review
                </button>
            </form>
            {recipeComments.sort(sortByRecent).map((comment) => (
                <RecipeComment key={comment.id} {...comment} />
            ))}
        </section>
    )
}
