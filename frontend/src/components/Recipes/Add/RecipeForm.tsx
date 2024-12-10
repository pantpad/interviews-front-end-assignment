import { endpoint } from '../../../api/recipe'
import FormInput from './FormInput'
import FormSelect, { FormSelectType } from './FormSelect'
import FormButtons from './FormButtons'
import { formInputs, useFormContext } from '../../../context/form-context'

export default function RecipeForm() {
    const {
        values,
        setValues,
        errorVisibility,
        setErrorVisibility,
        handleReset,
    } = useFormContext()

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const sendData = await fetch(`${endpoint}/recipes`, {
            method: 'POST',
            headers: {
                enctype: 'multipart/form-data',
            },
            body: form,
        })

        if (sendData.ok) {
            console.log('Recipe added successfully')
        } else {
            console.log('Error adding recipe')
        }
    }

    return (
        <>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                {formInputs.map((input) => (
                    <div className="[&>label]:block" key={input.id}>
                        <label htmlFor={input.name}>{input.label}</label>
                        {'options' in input ? (
                            <FormSelect
                                input={input as FormSelectType['input']}
                                values={values}
                                handleChange={handleChange}
                            />
                        ) : (
                            <FormInput
                                input={input}
                                values={values}
                                errorVisibility={errorVisibility}
                                setErrorVisibility={setErrorVisibility}
                                handleChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <FormButtons />
            </form>
        </>
    )
}
