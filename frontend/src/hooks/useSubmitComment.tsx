import { useMutation, useQueryClient } from '@tanstack/react-query'
import { RecipeCommentType, submitComment } from '../api/recipe'

export const mutationKey = ['submitComment']

export function useSubmitComment() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey,
        mutationFn: submitComment,
        onMutate: async ({ formData, recipeId }) => {
            // cancel the query to avoid race conditions
            await queryClient.cancelQueries({
                queryKey: ['recipeComments', { recipeId }],
            })

            // get the snapshot that will be used to rollback the optimistic update
            const snapshotBeforeOptimisticUpdate = queryClient.getQueryData([
                'recipeComments',
                { recipeId },
            ])

            // create comment object (like the one returned by the server)
            const formObject = Object.fromEntries(formData.entries())
            const newComment = {
                ...formObject,
                id: Date.now().toString(),
                rating: Number(formObject.rating),
                date: new Date(),
            }

            // actual optimistic update
            queryClient.setQueryData(
                ['recipeComments', { recipeId }],
                (recipeComments: RecipeCommentType[]) => {
                    return recipeComments
                        ? [...recipeComments, newComment]
                        : [newComment]
                }
            )

            // return a function to rollback the optimistic update
            return () => {
                queryClient.setQueryData(
                    ['recipeComments', { recipeId }],
                    snapshotBeforeOptimisticUpdate
                )
            }
        },
        onError: (error, _, rollback) => {
            console.log('Error adding comment', error)
            alert('Error adding comment')
            rollback?.()
        },
        onSettled: (_, __, { recipeId }) => {
            return queryClient.invalidateQueries({
                queryKey: ['recipeComments', { recipeId }],
            })
        },
    })
}
