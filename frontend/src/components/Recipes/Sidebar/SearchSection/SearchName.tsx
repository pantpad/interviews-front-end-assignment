import { useState } from 'react'

export default function SearchName() {
    const [searchName, setSearchName] = useState('')

    return (
        <div>
            <label className="mb-1 block text-sm">Search by name</label>
            <input
                type="text"
                placeholder="Enter recipe name"
                className="w-full rounded-md border p-2"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />
        </div>
    )
}
