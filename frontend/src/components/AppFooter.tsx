import { Link } from '@tanstack/react-router'

export default function AppFooter() {
    return (
        <footer className="flex min-h-24 gap-2 border-t border-zinc-200 bg-white p-2 py-4">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-between">
                <div>
                    <h1 className="text-xl font-bold">Recipe Book</h1>
                    <p>Enhance your cooking experience</p>
                    <p>© 2024 Recipe Book</p>
                </div>
                <article>
                    <ul>
                        <li>
                            <Link to="/about">
                                <strong>Support</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">Guidelines</Link>
                        </li>
                        <li>
                            <Link to="/about">Feedback Hub</Link>
                        </li>
                        <li>
                            <Link to="/about">Cooking Tips</Link>
                        </li>
                        <li>
                            <Link to="/about">Get in Touch</Link>
                        </li>
                    </ul>
                </article>
            </div>
        </footer>
    )
}
