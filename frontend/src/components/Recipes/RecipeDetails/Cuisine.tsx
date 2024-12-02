import useFetch from '../../../hooks/useFetch'
import { CuisineType } from '../../../api/recipe'

export default function Cuisine({ cuisineId }: { cuisineId: string }) {
    const {
        data: cuisine,
        loading: cuisineLoading,
        error: cuisineError,
    } = useFetch<CuisineType>(`http://localhost:8080/cuisines/${cuisineId}`)

    if (cuisineError) return <p>Error loading cuisine</p>
    if (cuisineLoading) return <p>Loading cuisine...</p>
    if (!cuisine) return <p>No cuisine found</p>

    return <p>cuisine: {cuisine.name}</p>
}
