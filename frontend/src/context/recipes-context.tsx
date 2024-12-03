import { useLoaderData } from '@tanstack/react-router'
import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useMemo,
} from 'react'

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
    const { cuisines, diets, difficulties } = useLoaderData({
        from: '/recipes',
    })

    const cuisinesMap = Object.fromEntries(
        cuisines.map((obj) => [obj.id, obj.name])
    )

    const dietsMap = Object.fromEntries(diets.map((obj) => [obj.id, obj.name]))

    const difficultiesMap = Object.fromEntries(
        difficulties.map((obj) => [obj.id, obj.name])
    )

    console.log(cuisinesMap, dietsMap, difficultiesMap)

    const recipesCtx = useMemo(() => {
        return {
            cuisines: cuisinesMap,
            diets: dietsMap,
            difficulties: difficultiesMap,
        }
    }, [cuisinesMap, dietsMap, difficultiesMap])

    return (
        <RecipesContext.Provider value={recipesCtx}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
