import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router'

import './index.css'
import App from './App'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    )
}
