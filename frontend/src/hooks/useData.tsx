import { useEffect, useState } from 'react'

export function useData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async (url: string) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error('An error occurred')
            )
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    return { data, error, loading }
}
