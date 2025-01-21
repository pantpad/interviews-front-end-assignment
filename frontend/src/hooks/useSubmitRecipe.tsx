import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitRecipe } from '../api/recipe'

export default function useSubmitRecipe() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: submitRecipe,
        onSuccess: () => {
            console.log('Recipe added successfully')
            queryClient.invalidateQueries({ queryKey: ['recipes'] })
        },
        onError: () => {
            alert('Error adding recipe')
        },
    })
}
