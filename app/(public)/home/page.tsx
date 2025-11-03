import { getEvents } from '@/features/shared-features/events/server/data-access/events.data-access'
import { EventList } from '@/features/shared-features/events/components/event-list'
import { SearchFilters } from '@/features/shared-features/events/components/search-filters'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string }
}) {
  // Fetch events with filters (Server Component)
  const events = await getEvents({
    search: searchParams.search,
    category: searchParams.category,
  })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Discover Events</h1>
        <p className="text-gray-600 text-lg">
          Find and register for amazing events in your area
        </p>
      </div>

      {/* Client Component for Search/Filter */}
      <SearchFilters />

      {/* Server Component for Event List */}
      <EventList events={events} />
    </div>
  )
}