import useFetch from '../../../hooks/useFetch'
import { DetailsType } from '../../../api/recipe'

export default function Diet({ dietId }: { dietId: string }) {
    const { data, loading, error } = useFetch<DetailsType>(
        `http://localhost:8080/diets/${dietId}`
    )

    if (error) return <p>Error loading diet</p>
    if (loading) return <p>Loading diet...</p>
    if (!data) return <p>No diet found</p>

    return <p>Diet: {data.name}</p>
}
