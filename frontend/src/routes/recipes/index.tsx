import { createFileRoute } from '@tanstack/react-router'
import RecipesList from '../../components/Recipes/RecipesList'

export const Route = createFileRoute('/recipes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto w-full max-w-7xl p-2">
      <RecipesList />
    </div>
  )
}
