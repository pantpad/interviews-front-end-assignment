import { submitRecipe } from '../api/recipe'
import { createContext, PropsWithChildren, useContext, useReducer } from 'react'

import {
    FormValues,
    ErrorVisibility,
    initialFormValues,
    initialErrorVisibility,
} from '../utils/recipeFormInputs'

type FormState = {
    values: FormValues
    errorVisibility: ErrorVisibility
}

type Action =
    | { type: 'reset' }
    | { type: 'change'; name: string; value: string | number }
    | { type: 'showError'; name: string }

type FormContextType = {
    state: FormState
    dispatch: React.Dispatch<Action>
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormContext = createContext<FormContextType | null>(null)

function formReducer(state: FormState, action: Action): FormState {
    switch (action.type) {
        case 'reset': {
            return {
                values: initialFormValues,
                errorVisibility: initialErrorVisibility,
            }
        }
        case 'change': {
            return {
                ...state,
                values: { ...state.values, [action.name]: action.value },
            }
        }
        case 'showError': {
            return {
                ...state,
                errorVisibility: {
                    ...state.errorVisibility,
                    [action.name]: true,
                },
            }
        }
        default: {
            return state
        }
    }
}

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, {
        values: initialFormValues,
        errorVisibility: initialErrorVisibility,
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const response = await submitRecipe(form)

        if (response.ok) {
            console.log('Recipe added successfully')
            alert('Recipe added successfully')
        } else {
            console.log('Error adding recipe')
            alert('Error adding recipe')
        }
    }

    return (
        <FormContext.Provider
            value={{
                state,
                dispatch,
                handleSubmit,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider')
    }
    return context
}

export const handleReset = (dispatch: React.Dispatch<Action>) =>
    dispatch({ type: 'reset' })

export const handleChange = (
    dispatch: React.Dispatch<Action>,
    name: string,
    value: string | number
) => dispatch({ type: 'change', name, value })

export const handleShowError = (
    dispatch: React.Dispatch<Action>,
    name: string
) => dispatch({ type: 'showError', name })

export default FormContext
