import { useImageLoading } from '../../hooks/useImageLoading'

type ImageProps = {
    src: string
    alt: string
    className?: string
    thumbnailSrc?: string
}

export function Image({ src, alt, className = '', thumbnailSrc }: ImageProps) {
    const isFullImageLoaded = useImageLoading(src)
    const isThumbnailLoaded = useImageLoading(thumbnailSrc || '')

    return (
        <div className="relative">
            {!isThumbnailLoaded && (
                <div className="absolute inset-0 animate-pulse rounded-md bg-gray-200 transition-opacity duration-300"></div>
            )}

            {thumbnailSrc && (
                <img
                    src={thumbnailSrc}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover blur-sm transition-opacity duration-300 ${
                        isThumbnailLoaded && !isFullImageLoaded
                            ? 'opacity-100'
                            : 'opacity-0'
                    } ${className}`}
                />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                    isFullImageLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
            />
        </div>
    )
}
