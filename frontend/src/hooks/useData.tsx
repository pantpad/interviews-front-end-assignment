import { useEffect, useState } from 'react'

export function useData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
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
            } catch (error) {
                if (error instanceof Error && error.name !== 'AbortError') {
                    setError(error)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, error, loading }
}
