import { useMutation, useQueryClient } from '@tanstack/react-query'
import { RecipeCommentType, submitComment } from '../api/recipe'

export const mutationKey = ['submitComment']

export function useSubmitComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey,
        mutationFn: submitComment,
        onSuccess: (newComment, { recipeId }) => {
            console.log('Comment added successfully')
            queryClient.setQueryData(
                ['recipeComments', { recipeId }],
                (recipeComments: RecipeCommentType[]) => {
                    return [...recipeComments, newComment]
                }
            )
        },
        onError: (error) => {
            console.log('Error adding comment', error)
        },
    })
}
