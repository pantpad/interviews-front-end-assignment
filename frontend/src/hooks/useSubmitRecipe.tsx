import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitRecipe } from '../api/recipe'
import { FormValidationSchema, FormValues } from '../context/form-context'

export default function useSubmitRecipe() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (formValues: FormValues) => {
            const validatedFormValues = FormValidationSchema.parse(formValues)
            const response = await submitRecipe(validatedFormValues)
            return response
        },
        onSuccess: () => {
            console.info('Recipe added successfully')
            queryClient.invalidateQueries({ queryKey: ['recipes'] })
        },
        onError: (error) => {
            console.info('Error adding recipe', error)
        },
    })
}
