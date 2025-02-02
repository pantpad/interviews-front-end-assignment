import { createContext, PropsWithChildren, useContext, useReducer } from 'react'
import { z } from 'zod'

import useSubmitRecipe from '../hooks/useSubmitRecipe'

export const formValidationSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .regex(/^[a-zA-Z0-9\s]*$/, 'Only letters and numbers are allowed'),
    ingredients: z.string().min(1, 'Ingredients cannot be empty'),
    instructions: z
        .string()
        .min(3, 'Instructions must be at least 3 characters'),
    cuisineId: z.string().min(1, 'Cuisine is required'),
    dietId: z.string().min(1, 'Diet is required'),
    difficultyId: z.string().min(1, 'Difficulty is required'),
    image: z
        .instanceof(File, { message: 'Image is required' })
        .nullable()
        .refine(
            (file) => (file ? file.size > 0 : false),
            'File cannot be empty'
        )
        .refine(
            (file) => (file ? file.type.startsWith('image/') : false),
            'Must be an image file'
        ),
})

export type FormValues = z.infer<typeof formValidationSchema>

const initialFormValues: FormValues = {
    name: '',
    ingredients: '',
    instructions: '',
    cuisineId: '',
    dietId: '',
    difficultyId: '',
    image: null,
}

type FormState = {
    values: FormValues
    errors: Partial<Record<keyof FormValues, string>>
}

type Action =
    | { type: 'reset' }
    | { type: 'change'; name: keyof FormValues; value: string | number | File }
    | { type: 'setErrors'; errors: Partial<Record<keyof FormValues, string>> }

const initialFormState: FormState = {
    values: initialFormValues,
    errors: {},
}

type FormContextType = {
    state: FormState
    dispatch: React.Dispatch<Action>
    handleSubmit: () => void
}

const FormContext = createContext<FormContextType | null>(null)

function formReducer(state: FormState, action: Action): FormState {
    switch (action.type) {
        case 'reset': {
            return initialFormState
        }
        case 'change': {
            return {
                ...state,
                values: { ...state.values, [action.name]: action.value },
                errors: { ...state.errors, [action.name]: '' },
            }
        }
        case 'setErrors':
            return {
                ...state,
                errors: { ...state.errors, ...action.errors },
            }
        default: {
            return state
        }
    }
}

export const FormProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialFormState)

    const { mutate } = useSubmitRecipe()

    async function handleSubmit() {
        try {
            formValidationSchema.parse(state.values)
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.reduce(
                    (acc, issue) => {
                        const fieldName = issue.path[0] as keyof FormValues
                        acc[fieldName] = issue.message
                        return acc
                    },
                    {} as Record<keyof FormValues, string>
                )

                dispatch({ type: 'setErrors', errors })
            }
            return
        }

        mutate(state.values, {
            onSuccess: () => {
                handleReset(dispatch)
            },
            onError: (error) => {
                console.info(error)
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

export const handleSetErrors = (
    dispatch: React.Dispatch<Action>,
    errors: Partial<Record<keyof FormValues, string>>
) => dispatch({ type: 'setErrors', errors })

export default FormContext
