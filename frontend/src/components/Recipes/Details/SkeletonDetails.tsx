import SkeletonCard from '../SkeletonCard'

export function SkeletonDetails() {
    return (
        <div className="flex flex-col gap-4">
            <SkeletonCard />
            <div className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 h-6 w-24 animate-pulse rounded bg-gray-200" />
                    <div className="h-32 w-full animate-pulse rounded bg-gray-200" />
                </div>
                <div>
                    <div className="mb-2 h-6 w-16 animate-pulse rounded bg-gray-200" />
                    <div className="h-10 w-64 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="ml-auto h-8 w-32 animate-pulse rounded bg-gray-200" />
            </div>
            <SkeletonCard />
        </div>
    )
}
