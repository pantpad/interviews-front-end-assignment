import { useSearchParams } from 'react-router'

type SearchParams = {
    q: string
    cuisineId: string
    dietId: string
    difficultyId: string
}

export const getNonEmptySearchParams = (params: SearchParams) => {
    const paramsArray = Object.entries(params)
    const nonEmptyParams = paramsArray.filter(([_, value]) => value !== '')

    return Object.fromEntries(nonEmptyParams)
}

const getQueryParamsString = (params: SearchParams) => {
    const nonEmptyParams = getNonEmptySearchParams(params)
    return new URLSearchParams(nonEmptyParams).toString()
}

let queryParamsString = ''

export default function useMySearchParams() {
    const [searchParams] = useSearchParams()

    const q = searchParams.get('q') || ''
    const cuisineId = searchParams.get('cuisineId') || ''
    const dietId = searchParams.get('dietId') || ''
    const difficultyId = searchParams.get('difficultyId') || ''
    const page = Number(searchParams.get('_page')) || 1

    queryParamsString = getQueryParamsString({
        q,
        cuisineId,
        dietId,
        difficultyId,
    })

    return { q, cuisineId, dietId, difficultyId, page, queryParamsString }
}
