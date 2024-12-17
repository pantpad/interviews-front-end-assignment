import { endpoint, RecipeComment } from '../../../api/recipe'
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

    if (error) {
        return <div>Error: {error}</div>
    }

    if (loading) {
        return <SkeletonCard />
    }

    if (!recipeComments) {
        return <div>No recipe comments found</div>
    }

    console.log(recipeComments)

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">User Reviews</h2>
            {recipeComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{String(comment.date)}</p>
                        <p className="font-semibold">{comment.rating}</p>
                    </div>
                )
            })}
            <form
                action={`${endpoint}/recipes/${recipeId}/comments`}
                method="POST"
            >
                <div>
                    <label className="block">Comment</label>
                    <textarea
                        name="comment"
                        required
                        minLength={10}
                        rows={4}
                        title="min character lenght is 10"
                        className="w-full rounded shadow"
                    />
                </div>
                <div>
                    <label className="block">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        required
                        className="h-8 w-64"
                    />
                </div>
                <div>
                    <label className="block">Date</label>
                    <input type="date" className="h-8 w-64" required />
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
