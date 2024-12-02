import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Layout from '../components/ui/Layout'

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout className="flex min-h-screen flex-col bg-zinc-100">
                <AppHeader />
                <Layout className="flex-1">
                    <Outlet />
                </Layout>
                <AppFooter />
            </Layout>
            <TanStackRouterDevtools />
        </>
    ),
})
