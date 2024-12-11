import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { useFormContext } from '../../../context/form-context'
import {
    recipeFormInputs as formInputs,
    FormInputType,
    FormSelectType,
} from '../../../utils/recipeFormInputs'

function isFormSelect(
    input: FormInputType | FormSelectType
): input is FormSelectType {
    return 'options' in input
}

export default function FormInputs() {
    const {
        state: { values },
    } = useFormContext()

    return (
        <div>
            {formInputs.map((input) => (
                <div className="[&>label]:block" key={input.id}>
                    <label htmlFor={input.name}>{input.label}</label>
                    {isFormSelect(input) ? (
                        <FormSelect input={input} value={values[input.name]} />
                    ) : (
                        <FormInput input={input} value={values[input.name]} />
                    )}
                </div>
            ))}
        </div>
    )
}
