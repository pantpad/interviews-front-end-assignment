import { useState, useEffect } from 'react'

export function useImageLoading(src: string) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false) // Reset when src changes

        if (!src) return

        const img = new Image()
        img.src = src

        img.onload = () => {
            setIsLoaded(true)
        }

        return () => {
            // Clean up by removing event listener and aborting load
            img.onload = null
            img.src = ''
        }
    }, [src])

    return isLoaded
}
