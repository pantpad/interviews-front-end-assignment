export default function SelectPreference({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
    return (
        <div>
            <label className="mb-1 block text-sm">
                Select dietary preference
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={value}
                onChange={onChange}
            >
                <option value="">Choose preference</option>
            </select>
        </div>
    )
}
