import { getCuisines, getDiets, getDifficulties } from '../api/recipe'
import { useCallback } from 'react'
import { useQueries } from '@tanstack/react-query'

const cuisinesOption = {
    queryKey: ['cuisines'],
    queryFn: getCuisines,
}
const dietsOption = {
    queryKey: ['diets'],
    queryFn: getDiets,
}
const difficultiesOption = {
    queryKey: ['difficulties'],
    queryFn: getDifficulties,
}

export default function useRecipeDetails() {
    const [cuisines, diets, difficulties] = useQueries({
        queries: [cuisinesOption, dietsOption, difficultiesOption],
    })

    if (cuisines.error || diets.error || difficulties.error) {
        throw new Error('Failed to fetch recipe details')
    }

    const cuisinesMap = Object.fromEntries(
        cuisines.data?.map((obj) => [obj.id, obj.name]) ?? []
    )

    const dietsMap = Object.fromEntries(
        diets.data?.map((obj) => [obj.id, obj.name]) ?? []
    )

    const difficultiesMap = Object.fromEntries(
        difficulties.data?.map((obj) => [obj.id, obj.name]) ?? []
    )

    const getOptionArray = useCallback(
        (optionName: string) => {
            switch (optionName) {
                case 'cuisines':
                    return cuisines
                case 'diets':
                    return diets
                case 'difficulties':
                    return difficulties
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
