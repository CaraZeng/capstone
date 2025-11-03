import { connectDB } from '@/lib/db'
import { Event } from '@/features/shared-features/events/schema/event.schema'

export async function getOrganizerEvents(organizerId: string) {
  await connectDB()
  
  const events = await Event.find({ organizerId })
    .sort({ createdAt: -1 })
    .lean()
  
  return JSON.parse(JSON.stringify(events))
}