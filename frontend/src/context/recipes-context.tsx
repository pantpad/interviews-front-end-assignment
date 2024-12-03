import { useLoaderData } from '@tanstack/react-router'
import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useMemo,
} from 'react'

import { DetailsType } from '../api/recipe'

export const RecipesContext = createContext<RecipesProviderProps | null>(null)

export const useRecipesContext = () => {
    const context = useContext(RecipesContext)
    if (context === null) {
        throw new Error(
            'useRecipesContext must be used within a RecipesProvider'
        )
    }
    return context
}

type RecipesProviderProps = {
    [key: string]: DetailsType[]
}

const RecipesProvider: FC<PropsWithChildren> = ({ children }) => {
    const { cuisines, diets, difficulties } = useLoaderData({
        from: '/recipes',
    })

    const recipesCtx = useMemo(() => {
        return { cuisines, diets, difficulties }
    }, [cuisines, diets, difficulties])

    return (
        <RecipesContext.Provider value={recipesCtx}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
