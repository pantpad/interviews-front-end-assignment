import { Outlet } from 'react-router'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

function App() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-zinc-100">
                <AppHeader />
                <main className="flex flex-1 flex-col">
                    <Outlet />
                </main>
                <AppFooter />
            </div>
        </>
    )
}

export default App
