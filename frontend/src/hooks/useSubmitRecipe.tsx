import { useMutation, useQueryClient } from '@tanstack/react-query'
import { submitRecipe } from '../api/recipe'
import { FormValidationSchema, FormValues } from '../context/form-context'

export default function useSubmitRecipe() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (formValues: FormValues) => {
            console.log('formValues', formValues)
            const validatedFormValues = FormValidationSchema.parse(formValues)
            const response = await submitRecipe(validatedFormValues)
            return response
        },
        onSuccess: () => {
            console.log('Recipe added successfully')
            queryClient.invalidateQueries({ queryKey: ['recipes'] })
        },
        onError: (error) => {
            console.log('Error adding recipe', error)
        },
    })
}
