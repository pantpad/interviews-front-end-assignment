import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { useFormContext } from '../../../context/form-context'
import {
    recipeFormInputs as formInputs,
    FormInputType,
    FormSelectType,
} from '../../../utils/recipeFormInputs'

export default function FormInputs() {
    const {
        state: { values },
    } = useFormContext()

    return (
        <div>
            {formInputs.map((input) => (
                <div className="[&>label]:block" key={input.id}>
                    <label htmlFor={input.name}>{input.label}</label>
                    {'options' in input ? (
                        <FormSelect
                            input={input as FormSelectType}
                            value={values[input.name as keyof typeof values]}
                        />
                    ) : (
                        <FormInput
                            input={input as FormInputType}
                            value={values[input.name as keyof typeof values]}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
