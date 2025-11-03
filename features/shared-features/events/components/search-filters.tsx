'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  
  const handleSearch = () => {
    const params = new URLSearchParams()
    
    if (search.trim()) {
      params.set('search', search.trim())
    }
    
    if (category) {
      params.set('category', category)
    }
    
    startTransition(() => {
      router.push(`/?${params.toString()}`)
    })
  }
  
  const handleReset = () => {
    setSearch('')
    setCategory('')
    startTransition(() => {
      router.push('/')
    })
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Search & Filter Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium mb-2">
            Search Events
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-end gap-2">
          <button
            onClick={handleSearch}
            disabled={isPending}
            className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
          >
            {isPending ? 'Searching...' : 'Search'}
          </button>
          <button
            onClick={handleReset}
            disabled={isPending}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {(search || category) && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="text-gray-600">Active filters:</span>
          {search && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Search: "{search}"
            </span>
          )}
          {category && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Category: {category}
            </span>
          )}
        </div>
      )}
    </div>
  )
}