import { useData } from './useData'
import { endpoint } from '../api/recipe'
import { DetailsType } from '../api/recipe'
import { useCallback } from 'react'

export default function useRecipeDetails() {
    const {
        data: cuisines = [],
        loading: cuisinesLoading,
        error: cuisinesError,
    } = useData<DetailsType[]>(`${endpoint}/cuisines`, [])

    const {
        data: diets = [],
        loading: dietsLoading,
        error: dietsError,
    } = useData<DetailsType[]>(`${endpoint}/diets`, [])
    const {
        data: difficulties = [],
        loading: difficultiesLoading,
        error: difficultiesError,
    } = useData<DetailsType[]>(`${endpoint}/difficulties`, [])

    if (cuisinesError || dietsError || difficultiesError) {
        throw new Error('Failed to fetch recipe details')
    }

    const cuisinesMap = Object.fromEntries(
        cuisines?.map((obj) => [obj.id, obj.name]) ?? []
    )

    const dietsMap = Object.fromEntries(
        diets?.map((obj) => [obj.id, obj.name]) ?? []
    )

    const difficultiesMap = Object.fromEntries(
        difficulties?.map((obj) => [obj.id, obj.name]) ?? []
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
        cuisinesLoading,
        dietsLoading,
        difficultiesLoading,
        getOptionArray,
    }
}
