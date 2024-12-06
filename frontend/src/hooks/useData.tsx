import { useEffect, useState } from 'react'

// Stale time = 5 minutes, after that we refetch.
const STALE_TIME = 1000 * 60 * 5

type Cache<T> = Record<string, { data: T; timestamp: number }>

let cache: Cache<any> = {}

export function useData<T>(url: string, initialData: T) {
    const [data, setData] = useState<T>(initialData)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url, {
                    signal: abortController.signal,
                })
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const json = await response.json()
                setData(json)
                ;(cache as Cache<T>)[url] = {
                    data: json,
                    timestamp: Date.now(),
                }
                setLoading(false)
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    return
                }
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError(String(error))
                }
                setLoading(false)
            }
        }

        if (cache[url] && cache[url].timestamp + STALE_TIME > Date.now()) {
            setData((cache as Cache<T>)[url].data)
        } else {
            fetchData()
        }

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, error, loading }
}
