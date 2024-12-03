import useData from './useData'

export default function useRecipeDetails() {
    const { data: cuisines } = useData<Record<number, string>>(
        'http://localhost:3000/api/cuisines'
    )
    const { data: diets } = useData<Record<number, string>>(
        'http://localhost:3000/api/diets'
    )
    const { data: difficulties } = useData<Record<number, string>>(
        'http://localhost:3000/api/difficulties'
    )

    return { cuisines, diets, difficulties }
}
