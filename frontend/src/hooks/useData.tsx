import { useEffect, useState } from 'react'

const MIN_LOADING_TIME = 250

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
                setTimeout(() => {
                    setLoading(false)
                }, MIN_LOADING_TIME)
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    return
                }
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError(String(error))
                }
                setTimeout(() => {
                    setLoading(false)
                }, MIN_LOADING_TIME)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
        }
    }, [url])

    return { data, error, loading }
}
