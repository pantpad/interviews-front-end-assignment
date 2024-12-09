import { Link } from 'react-router'

const links = [
    { to: '/recipes', label: 'Recipes' },
    { to: '/about', label: 'Cuisines' },
    { to: '/about', label: 'Dietary' },
]

export default function AppHeader() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-4 md:gap-12">
                    <Link to="/" className="text-xl font-bold">
                        RecipeBook
                    </Link>
                    <div className="flex gap-4 md:gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className="text-sm text-zinc-600 hover:text-zinc-900 [&.active]:text-zinc-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/recipes/add"
                        className="rounded-full border border-zinc-300 px-6 py-2 text-sm hover:bg-zinc-50"
                    >
                        Add
                    </Link>
                    <button className="rounded-full bg-red-500 px-6 py-2 text-sm text-white hover:bg-red-600">
                        Filter
                    </button>
                </div>
            </nav>
        </header>
    )
}
