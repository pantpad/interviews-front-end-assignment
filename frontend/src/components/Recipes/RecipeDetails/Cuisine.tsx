import useFetch from '../../../hooks/useFetch'
import { DetailsType } from '../../../api/recipe'

export default function Cuisine({ cuisineId }: { cuisineId: string }) {
    const { data, loading, error } = useFetch<DetailsType>(
        `http://localhost:8080/cuisines/${cuisineId}`
    )

    if (error) return <p>Error loading cuisine</p>
    if (loading) return <p>Loading cuisine...</p>
    if (!data) return <p>No cuisine found</p>

    return <p>Cuisine: {data.name}</p>
}
