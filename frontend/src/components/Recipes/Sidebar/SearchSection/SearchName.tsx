export default function SearchName({
    value,
    onChange,
}: {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div>
            <label className="mb-1 block text-sm">Search by name</label>
            <input
                type="text"
                placeholder="Enter recipe name"
                className="w-full rounded-md border p-2"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
