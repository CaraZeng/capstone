import mongoose from 'mongoose'

const registrationSchema = new mongoose.Schema({
  eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
  },
  attendeeId: { type: String, required: true },
  attendeeName: { type: String, required: true },
  attendeeEmail: { type: String, required: true },
  registeredAt: { type: Date, default: Date.now },
})

export const Registration = 
  mongoose.models.Registration || 
  mongoose.model('Registration', registrationSchema)