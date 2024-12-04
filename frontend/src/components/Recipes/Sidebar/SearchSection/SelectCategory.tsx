import { useState } from 'react'

export default function SelectCategory() {
    const [category, setCategory] = useState('')

    return (
        <div>
            <label className="mb-1 block text-sm">
                Select category
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Choose category</option>
            </select>
        </div>
    )
} 