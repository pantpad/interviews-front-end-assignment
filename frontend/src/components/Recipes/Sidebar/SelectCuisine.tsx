import { useState } from 'react'

export default function SelectCuisine() {
    const [cuisine, setCuisine] = useState('')

    return (
        <div>
            <label className="mb-1 block text-sm">
                Select cuisine
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            >
                <option value="">Choose cuisine</option>
            </select>
        </div>
    )
} 