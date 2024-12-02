import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="p-2">
      <h3>About Us</h3>
      <p>This is the about page.</p>
    </div>
  ),
}) 