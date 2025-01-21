import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitComment } from '../api/recipe'

export function useSubmitComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: submitComment,
        onSuccess: () => {
            console.log('Comment added successfully')
            queryClient.invalidateQueries({ queryKey: ['recipeComments'] })
        },
        onError: (error) => {
            console.log('Error adding comment', error)
        },
    })
}
