import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App'
import Home from './routes'
import RecipesIndex from './routes/recipes'
import Recipes from './components/Recipes/Recipes'
import RecipeCard from './components/Recipes/RecipeCard'

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
                                element={<RecipeCard />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}
