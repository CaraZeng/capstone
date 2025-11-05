import { getEvents } from '@/features/shared-features/events/server/data-access/events.data-access'
import { SearchFilters } from '@/features/shared-features/events/components/search-filters'
import { EventCard } from '@/features/shared-features/events/components/event-card'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>
}) {
  const params = await searchParams;
  // Fetch events with filters (Server Component)
  const events = await getEvents({
    search: params.search,
    category: params.category,
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
      {events.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No events found
          </h2>
          <p className="text-gray-500">
            {params.search || params.category 
              ? "Try adjusting your search or filters"
              : "No events available at the moment"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: any) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}