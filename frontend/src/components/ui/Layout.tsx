import { FC, HTMLAttributes, PropsWithChildren } from 'react'

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    className = '',
    children,
    ...props
}) => {
    const combinedClassName = `${className}`.replace(/\s+/g, ' ').trim()

    return (
        <div className={combinedClassName} {...props}>
            {children}
        </div>
    )
}

export default Layout
