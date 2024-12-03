import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App'
import Home from './routes'
import Recipes from './components/Recipes/Recipes'
import RecipeDetails from './components/Recipes/RecipeDetails'
import RecipesIndex from './components/Recipes/RecipesIndex'

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
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}
