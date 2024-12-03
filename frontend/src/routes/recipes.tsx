import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            Hello "/recipes"!
            <Outlet />
        </div>
    )
}
