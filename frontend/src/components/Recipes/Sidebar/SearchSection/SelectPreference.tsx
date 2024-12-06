import useRecipeDetails from '../../../../hooks/useRecipeDetails'

export default function SelectPreference({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
    const { diets } = useRecipeDetails()
    const hasOptions = Object.keys(diets).length > 0

    return (
        <div>
            <label htmlFor="diets" className="mb-1 block text-sm">
                Select dietary preference
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={value}
                onChange={onChange}
                id="diets"
                name="diets"
            >
                <option value="">
                    {hasOptions ? 'Choose preference' : ''}
                </option>
                {Object.entries(diets).map(([id, name]) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
}
