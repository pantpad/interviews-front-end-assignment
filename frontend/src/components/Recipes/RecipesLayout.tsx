import RecipesContent from './Content'
import RecipesSidebar from './Sidebar'

export default function RecipesLayout() {
    return (
        <div className="flex gap-4">
            <aside className="flex">
                <RecipesSidebar />
            </aside>
            <section className="flex-1">
                <RecipesContent />
            </section>
        </div>
    )
}
