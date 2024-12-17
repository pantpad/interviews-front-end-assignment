import RecipeForm from './RecipeForm'
import { FormProvider } from '../../../context/form-context'

export default function AddRecipe() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Add a recipe</h1>
            <FormProvider>
                <RecipeForm />
            </FormProvider>
        </section>
    )
}
