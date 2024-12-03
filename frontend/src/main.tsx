import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App'
import Home from './routes'
import Recipes from './routes/recipes'
import RecipesList from './components/Recipes/RecipesList'
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
                        <Route path="/recipes" element={<Recipes />}>
                            <Route index element={<RecipesList />} />
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
