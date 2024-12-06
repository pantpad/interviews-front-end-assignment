export default function SkeletonCard() {
    return (
        <article className="flex flex-wrap overflow-hidden rounded-lg bg-white p-2 shadow transition hover:shadow-md">
            <figure className="relative h-full w-full sm:max-w-64">
                <div className="aspect-square h-full w-full animate-pulse rounded-md bg-gray-200" />
            </figure>
            <div className="flex flex-1 flex-col justify-between px-2">
                <section>
                    <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
                    <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                    <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                    <div className="mb-2 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                </section>
                <div className="mt-4 h-10 w-full animate-pulse rounded-md bg-gray-200" />
            </div>
        </article>
    )
}
