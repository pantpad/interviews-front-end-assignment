import { FormSelectType } from './FormSelect'

import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { formInputs, useFormContext } from '../../../context/form-context'

export default function FormInputs() {
    const { values, errorVisibility } = useFormContext()

    return (
        <div>
            {formInputs.map((input) => (
                <div className="[&>label]:block" key={input.id}>
                    <label htmlFor={input.name}>{input.label}</label>
                    {'options' in input ? (
                        <FormSelect
                            input={input as FormSelectType['input']}
                            value={values[input.name as keyof typeof values]}
                        />
                    ) : (
                        <FormInput
                            input={input}
                            value={values[input.name as keyof typeof values]}
                            errorVisibility={errorVisibility}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
