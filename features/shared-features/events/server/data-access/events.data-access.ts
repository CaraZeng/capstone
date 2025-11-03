import { connectDB } from '@/lib/db'
import { Event } from '../../schema/event.schema'
import type { EventFilters } from '../../types/event.types'

export async function getEvents(filters?: EventFilters) {
  await connectDB()
  
  const query: any = {}
  
  // Search in title and description
  if (filters?.search) {
    query.$or = [
      { title: { $regex: filters.search, $options: 'i' } },
      { description: { $regex: filters.search, $options: 'i' } },
    ]
  }
  
  // Filter by category
  if (filters?.category) {
    query.category = filters.category
  }
  
  // Filter by price range
  if (filters?.minPrice !== undefined || filters?.maxPrice !== undefined) {
    query.ticketPrice = {}
    if (filters.minPrice !== undefined) {
      query.ticketPrice.$gte = filters.minPrice
    }
    if (filters.maxPrice !== undefined) {
      query.ticketPrice.$lte = filters.maxPrice
    }
  }
  
  const events = await Event.find(query).sort({ date: 1 }).lean()
  
  return JSON.parse(JSON.stringify(events))
}

export async function getEventById(eventId: string) {
  await connectDB()
  
  const event = await Event.findById(eventId).lean()
  
  if (!event) {
    return null
  }
  
  return JSON.parse(JSON.stringify(event))
}