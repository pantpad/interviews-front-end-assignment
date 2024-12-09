import useRecipeDetails from '../../../../hooks/useRecipeDetails'

export default function SelectCuisine({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
    const { cuisines } = useRecipeDetails()
    const hasOptions = Object.keys(cuisines).length > 0

    return (
        <div>
            <label htmlFor="cuisines" className="mb-1 block text-sm">
                Select cuisine
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={value}
                onChange={onChange}
                id="cuisines"
                name="cuisines"
            >
                <option value="">{hasOptions ? 'Choose cuisine' : ''}</option>
                {Object.entries(cuisines).map(([id, name]) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
}
