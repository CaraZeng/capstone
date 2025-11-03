export interface Event {
  _id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  category: string
  capacity: number
  ticketPrice: number
  imageUrl?: string
  organizerId: string
  createdAt: Date
}

export interface EventFilters {
  search?: string
  category?: string
  minPrice?: number
  maxPrice?: number
  startDate?: Date
  endDate?: Date
}