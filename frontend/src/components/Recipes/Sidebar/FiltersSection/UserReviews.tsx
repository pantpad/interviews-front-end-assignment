export default function UserReviews() {
    return (
        <div>
            <h3 className="mb-2 font-semibold">User Reviews</h3>
            <div className="space-y-2">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>All Ratings</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>5 Stars</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>4 Stars</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-red-500" />
                    <span>Beginner-Friendly</span>
                </label>
            </div>
        </div>
    )
} 