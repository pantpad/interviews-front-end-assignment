import { Link } from 'react-router'

const Home: React.FC = () => {
    return (
        <section className="flex h-full flex-1 flex-wrap gap-2 p-2">
            <article className="mb-10 flex min-w-64 flex-1 flex-col items-center justify-center gap-2">
                <img
                    height={64}
                    width={64}
                    src={'/assets/chef.png'}
                    alt="placeholder"
                    className="w-full max-w-96 object-contain"
                />
                <h1 className="text-2xl font-bold">Recipe Book</h1>
                <p>Discover your favorite recipes</p>
                <Link to="/recipes">
                    <button className="rounded-xl bg-red-500 px-4 py-1 text-2xl text-white">
                        Explore
                    </button>
                </Link>
            </article>
        </section>
    )
}

export default Home
