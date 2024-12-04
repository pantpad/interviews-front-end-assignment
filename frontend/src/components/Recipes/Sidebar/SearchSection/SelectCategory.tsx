export default function SelectCategory({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
    return (
        <div>
            <label className="mb-1 block text-sm">Select category</label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={value}
                onChange={onChange}
            >
                <option value="">Choose category</option>
            </select>
        </div>
    )
}
