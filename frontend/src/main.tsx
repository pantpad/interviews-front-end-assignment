import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App'
import Home from './routes'
import Recipes from './components/Recipes/Recipes'
import RecipeCard from './components/Recipes/RecipeCard'
import RecipesProvider from './context/recipes-context'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <RecipesProvider>
                            <Route path="/recipes">
                                <Route index element={<Recipes />} />
                                <Route
                                    path="/recipes/:recipeId"
                                    element={<RecipeCard />}
                                />
                            </Route>
                        </RecipesProvider>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}
