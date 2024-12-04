import { Outlet } from 'react-router'
import RecipesProvider from '../../context/recipes-context'

export default function RecipesIndex() {
    return (
        <RecipesProvider>
            <Outlet />
        </RecipesProvider>
    )
}
