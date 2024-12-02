import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import Layout from '../components/ui/Layout'

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout className="bg-red-500">
                <AppHeader />
                <Outlet />
                <AppFooter />
            </Layout>
            <TanStackRouterDevtools />
        </>
    ),
})
