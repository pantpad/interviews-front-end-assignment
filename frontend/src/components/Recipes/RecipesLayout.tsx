import RecipesContent from './Content'
import RecipesSidebar from './Sidebar'

export default function RecipesLayout() {
    return (
        <div className="flex gap-4">
            <aside className="flex flex-[1]">
                <RecipesSidebar />
            </aside>
            <section className="flex-[3]">
                <RecipesContent />
            </section>
        </div>
    )
}
