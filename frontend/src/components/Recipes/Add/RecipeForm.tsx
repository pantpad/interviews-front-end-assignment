import FormButtons from './FormButtons'
import { useFormContext, handleReset } from '../../../context/form-context'
import FormInputs from './FormInputs'

export default function RecipeForm() {
    const { dispatch, handleSubmit } = useFormContext()

    return (
        <>
            <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}
                onReset={() => handleReset(dispatch)}
            >
                <FormInputs />
                <FormButtons />
            </form>
        </>
    )
}
