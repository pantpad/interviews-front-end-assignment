import { Link } from '@tanstack/react-router'

export default function AppFooter() {
    return (
        <footer className="flex min-h-24 flex-wrap justify-between gap-2 border-t border-zinc-200 p-2 py-4">
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
        </footer>
    )
}
