import { createFileRoute, Link } from '@tanstack/react-router'
import chef from '../assets/chef.png'
import plate from '../assets/plate.png'

const Home: React.FC = () => {
    return (
        <section className="flex h-full flex-1 flex-wrap gap-2 p-2">
            <figure className="flex min-w-64 flex-1 items-center justify-center rounded-lg bg-zinc-200">
                <img
                    height={'64'}
                    width={'64'}
                    alt="plate"
                    src={plate}
                    className="w-full max-w-96 object-contain"
                />
            </figure>
            <article className="flex min-w-64 flex-1 flex-col items-center justify-center gap-2">
                <img
                    height={64}
                    width={64}
                    src={chef}
                    alt="placeholder"
                    className="w-full max-w-96 object-contain"
                />
                <h1 className="text-2xl font-bold">Recipe Book</h1>
                <p>Discover your favorite recipes</p>
                <Link to="/about">
                    <button className="rounded bg-red-500 px-4 py-1 text-white">
                        Explore
                    </button>
                </Link>
            </article>
        </section>
    )
}

export const Route = createFileRoute('/')({
    component: Home,
})
