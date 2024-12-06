import { useData } from './useData'
import { endpoint } from '../api/recipe'
import { DetailsType } from '../api/recipe'

// I want to introduce a cache mechanism to store the cuisines, diets, and difficulties.

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

    return {
        cuisines: cuisinesMap,
        diets: dietsMap,
        difficulties: difficultiesMap,
        cuisinesLoading,
        dietsLoading,
        difficultiesLoading,
    }
}
