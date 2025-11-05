import { getEvents } from '@/features/shared-features/events/server/data-access/events.data-access'
// ✅ 正确的导入路径
import { EventCard } from '@/features/shared-features/events/components/event-card'

export default async function OrganizerDashboard() {
  // 获取 organizer_123 的事件
  const events = await getEvents({ organizerId: 'organizer_123' })
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Organizer Dashboard</h1>
        <p className="text-gray-600">
          Manage your events • {events.length} event{events.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      {events.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No events yet
          </h2>
          <p className="text-gray-500">Create your first event to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: any) => (
            <EventCard key={event._id.toString()} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}