import { Outlet } from 'react-router'
import RecipesProvider from '../context/recipes-context'

export default function Recipes() {
    return (
        <RecipesProvider>
            <Outlet />
        </RecipesProvider>
    )
}
