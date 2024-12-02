import useFetch from '../../../hooks/useFetch'
import { DetailsType } from '../../../api/recipe'

export default function Difficulty({ difficultyId }: { difficultyId: string }) {
    const { data, loading, error } = useFetch<DetailsType>(
        `http://localhost:8080/difficulties/${difficultyId}`
    )

    if (error) return <p>Error loading difficulty</p>
    if (loading) return <p>Loading difficulty...</p>
    if (!data) return <p>No difficulty found</p>

    return <p>Difficulty: {data.name}</p>
}
