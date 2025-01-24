import { createContext, PropsWithChildren, useContext, useReducer } from 'react'
import useSubmitRecipe from '../hooks/useSubmitRecipe'

export type FormValues = {
    name: string | undefined
    ingredients: string | undefined
    instructions: string | undefined
    cuisineId: number
    dietId: number
    difficultyId: number
    image: File | null
}

const initialFormValues: FormValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: 0,
    dietId: 0,
    difficultyId: 0,
    image: null,
}

type FormState = {
    values: FormValues
}

type Action =
    | { type: 'reset' }
    | { type: 'change'; name: keyof FormValues; value: string | number | File }

type FormContextType = {
    state: FormState
    dispatch: React.Dispatch<Action>
    handleSubmit: () => void
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

    const { mutate } = useSubmitRecipe()

    async function handleSubmit() {
        mutate(state.values, {
            onSuccess: () => {
                handleReset(dispatch)
            },
        })
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
    value: string | number | File
) => dispatch({ type: 'change', name, value })

export default FormContext
