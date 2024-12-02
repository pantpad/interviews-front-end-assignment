import { Link } from '@tanstack/react-router'

export default function AppHeader() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-12">
                    <Link to="/" className="text-xl font-bold">
                        RecipeBoo
                    </Link>
                    <div className="flex gap-8">
                        <Link
                            to="/"
                            className="text-sm text-zinc-600 hover:text-zinc-900 [&.active]:text-zinc-900"
                        >
                            Main
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm text-zinc-600 hover:text-zinc-900 [&.active]:text-zinc-900"
                        >
                            Cuisines
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm text-zinc-600 hover:text-zinc-900 [&.active]:text-zinc-900"
                        >
                            Dietary
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/about"
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
