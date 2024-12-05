import { useSearchParams } from 'react-router'

export default function useMySearchParams() {
    const [searchParams] = useSearchParams()

    const q = searchParams.get('q') || ''
    const cuisineId = searchParams.get('cuisineId') || ''
    const dietId = searchParams.get('dietId') || ''
    const difficultyId = searchParams.get('difficultyId') || ''
    const page = Number(searchParams.get('_page')) || 1

    return { q, cuisineId, dietId, difficultyId, page }
}
