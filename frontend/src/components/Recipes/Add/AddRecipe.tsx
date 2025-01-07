import RecipeForm from './RecipeForm'
import { FormProvider } from '../../../context/form-context'

export default function AddRecipe() {
    return (
        <section className="mx-auto my-2 flex max-w-[32rem] flex-col gap-4 rounded-md border bg-zinc-50 p-4 shadow">
            <h1 className="text-center text-2xl font-bold">Add a recipe</h1>
            <FormProvider>
                <RecipeForm />
            </FormProvider>
        </section>
    )
}
