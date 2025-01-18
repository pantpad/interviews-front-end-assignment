import { getCuisines, getDiets, getDifficulties } from '../api/recipe'
import { useCallback, useMemo } from 'react'
import { useQueries } from '@tanstack/react-query'

const cuisinesOption = {
    queryKey: ['cuisines'],
    queryFn: getCuisines,
    staleTime: Infinity,
}
const dietsOption = {
    queryKey: ['diets'],
    queryFn: getDiets,
    staleTime: Infinity,
}
const difficultiesOption = {
    queryKey: ['difficulties'],
    queryFn: getDifficulties,
    staleTime: Infinity,
}

export default function useRecipeDetails() {
    const [cuisines, diets, difficulties] = useQueries({
        queries: [cuisinesOption, dietsOption, difficultiesOption],
    })

    if (cuisines.error || diets.error || difficulties.error) {
        throw new Error('Failed to fetch recipe details')
    }

    const cuisinesMap = useMemo(
        () =>
            Object.fromEntries(
                cuisines.data?.map((obj) => [obj.id, obj.name]) ?? []
            ),
        [cuisines.data]
    )

    const dietsMap = useMemo(
        () =>
            Object.fromEntries(
                diets.data?.map((obj) => [obj.id, obj.name]) ?? []
            ),
        [diets.data]
    )

    const difficultiesMap = useMemo(
        () =>
            Object.fromEntries(
                difficulties.data?.map((obj) => [obj.id, obj.name]) ?? []
            ),
        [difficulties.data]
    )

    const getOptionArray = useCallback(
        (optionName: string) => {
            switch (optionName) {
                case 'cuisines':
                    return cuisines.data
                case 'diets':
                    return diets.data
                case 'difficulties':
                    return difficulties.data
            }
        },
        [cuisines, diets, difficulties]
    )

    return {
        cuisines: cuisinesMap,
        diets: dietsMap,
        difficulties: difficultiesMap,
        getOptionArray,
    }
}
