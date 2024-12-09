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

export const getQueryParamsString = (params: SearchParams) => {
    const nonEmptyParams = getNonEmptySearchParams(params)
    const queryParamsString = new URLSearchParams(nonEmptyParams).toString()
    return queryParamsString.length > 0 ? `&${queryParamsString}` : ''
}
