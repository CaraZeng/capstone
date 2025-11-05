import { getEventById } from '@/features/shared-features/events/server/data-access/events.data-access'
import { notFound } from 'next/navigation'

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ eventId: string }> 
}) {
  const { eventId } = await params
  const event = await getEventById(eventId)
  
  if (!event) {
    notFound()
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-4xl mx-auto">
      {/* Event Banner */}
      {event.imageUrl ? (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
      ) : (
        <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-8 flex items-center justify-center">
          <span className="text-white text-9xl">🎫</span>
        </div>
      )}

      {/* Event Title */}
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

      {/* Event Meta Info */}
      <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{formattedDate}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-2">
          <span>🕒</span>
          <span>{event.time}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{event.location}</span>
        </div>
      </div>

      {/* Category Badge */}
      <div className="mb-6">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
          {event.category}
        </span>
      </div>

      {/* Event Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">About This Event</h2>
        <p className="text-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
          {event.description}
        </p>
      </div>

      {/* Event Details Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Ticket Price</p>
            <p className="text-3xl font-bold text-blue-600">
              {event.ticketPrice === 0 ? 'Free' : `$${event.ticketPrice}`}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Available Spots</p>
            <p className="text-3xl font-bold text-gray-800">{event.capacity}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Event Status</p>
            <p className="text-lg font-semibold text-green-600">
              Open for Registration
            </p>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg transition">
          Register for Event (Coming in Day 4)
        </button>
      </div>
    </div>
  )
}