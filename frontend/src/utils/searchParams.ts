export const getNonEmptySearchParams = (
    q: string,
    cuisineId: string,
    dietId: string
) => {
    const params = [
        ['q', q],
        ['cuisineId', cuisineId],
        ['dietId', dietId],
    ]

    const nonEmptyParams = params.filter(([_, value]) => value !== '')
    return Object.fromEntries(nonEmptyParams)
}

export const getQueryParamsString = (
    q: string,
    cuisineId: string,
    dietId: string
) => {
    const nonEmptyParams = getNonEmptySearchParams(q, cuisineId, dietId)
    return new URLSearchParams(nonEmptyParams).toString()
}
