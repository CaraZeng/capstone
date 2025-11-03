import Link from 'next/link'
import type { Event } from '../types/event.types'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link href={`/events/${event._id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-4xl">🎫</span>
          </div>
        )}

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">
            {event.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {event.description}
          </p>

          <div className="space-y-1 mb-3 text-sm text-gray-500">
            <p>📅 {formattedDate}</p>
            <p>📍 {event.location}</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
              {event.category}
            </span>
            <span className="text-lg font-bold text-blue-600">
              {event.ticketPrice === 0 ? 'Free' : `$${event.ticketPrice}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}