import { useState } from 'react'

export default function SelectPreference() {
    const [preference, setPreference] = useState('')

    return (
        <div>
            <label className="mb-1 block text-sm">
                Select dietary preference
            </label>
            <select
                className="w-full rounded-md border p-2 text-gray-500"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
            >
                <option value="">Choose preference</option>
            </select>
        </div>
    )
}
