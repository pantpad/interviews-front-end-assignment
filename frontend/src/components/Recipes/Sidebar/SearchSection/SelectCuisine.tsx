export default function SelectCuisine({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
    return (
        <div>
            <label className="mb-1 block text-sm">Select cuisine</label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={value}
                onChange={onChange}
            >
                <option value="">Choose cuisine</option>
            </select>
        </div>
    )
}
