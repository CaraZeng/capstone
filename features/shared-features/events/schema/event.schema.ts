import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  capacity: { type: Number, required: true },
  ticketPrice: { type: Number, required: true },
  imageUrl: { type: String },
  organizerId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)