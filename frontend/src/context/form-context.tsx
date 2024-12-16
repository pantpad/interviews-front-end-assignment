import { submitRecipe } from '../api/recipe'
import { createContext, PropsWithChildren, useContext, useReducer } from 'react'

type FormValues = {
    name: string | undefined
    ingredients: string | undefined
    instructions: string | undefined
    cuisineId: number
    dietId: number
    difficultyId: number
    image: string | undefined
}

const initialFormValues: FormValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: 0,
    dietId: 0,
    difficultyId: 0,
    image: '',
}

type FormState = {
    values: FormValues
}

type Action =
    | { type: 'reset' }
    | { type: 'change'; name: string; value: string | number }

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
            }
        }
        case 'change': {
            return {
                ...state,
                values: { ...state.values, [action.name]: action.value },
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
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const response = await submitRecipe(form)

        if (response.ok) {
            console.log('Recipe added successfully')
            console.log(response.statusText)
            alert('Recipe added successfully')
        } else {
            console.log('Error adding recipe')
            console.log(response.statusText)
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
    name: keyof FormValues,
    value: string | number
) => dispatch({ type: 'change', name, value })

export default FormContext
