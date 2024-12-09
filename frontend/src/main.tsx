import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App'
import Home from './components/Home'
import Recipes from './components/Recipes/RecipesLayout'
import RecipeDetails from './components/Recipes/Details/RecipeDetails'
import RecipesIndex from './components/Recipes/RecipesIndex'
import AddRecipe from './components/Recipes/Add/AddRecipe'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="/recipes" element={<RecipesIndex />}>
                            <Route index element={<Recipes />} />
                            <Route
                                path="/recipes/:recipeId"
                                element={<RecipeDetails />}
                            />
                            <Route
                                path="/recipes/add"
                                element={<AddRecipe />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}
