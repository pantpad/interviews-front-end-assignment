import FormButtons from './FormButtons'
import { useFormContext } from '../../../context/form-context'
import FormInputs from './FormInputs'

export default function RecipeForm() {
    const { handleReset, handleSubmit } = useFormContext()

    return (
        <>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <FormInputs />
                <FormButtons />
            </form>
        </>
    )
}
