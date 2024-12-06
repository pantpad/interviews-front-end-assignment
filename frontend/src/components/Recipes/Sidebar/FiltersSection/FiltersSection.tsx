import { UserReviews, RecipeDifficulty } from '..'

export default function FiltersSection() {
    return (
        <div className="space-y-6">
            <UserReviews />
            <RecipeDifficulty />
        </div>
    )
}
