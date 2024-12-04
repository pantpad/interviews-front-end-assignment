import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useMemo,
} from 'react'
import useRecipeDetails from '../hooks/useRecipeDetails'

export const RecipesContext = createContext<{
    cuisines: Record<number, string>
    diets: Record<number, string>
    difficulties: Record<number, string>
} | null>(null)

export const useRecipesContext = () => {
    const context = useContext(RecipesContext)
    if (context === null) {
        throw new Error(
            'useRecipesContext must be used within a RecipesProvider'
        )
    }
    return context
}

const RecipesProvider: FC<PropsWithChildren> = ({ children }) => {
    const { cuisines, diets, difficulties } = useRecipeDetails()

    const recipesCtx = useMemo(() => {
        return {
            cuisines,
            diets,
            difficulties,
        }
    }, [cuisines, diets, difficulties])

    return (
        <RecipesContext.Provider value={recipesCtx}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
