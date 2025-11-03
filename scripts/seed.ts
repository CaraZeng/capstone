// scripts/seed.ts
const mongoose = require('mongoose')

// 连接配置
const MONGODB_URI = 'mongodb://localhost:27017/event-platform'

// Event Schema
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

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)

// 示例数据
const sampleEvents = [
  {
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring keynote speakers from top tech companies including Google, Microsoft, and Amazon. Learn about the latest trends in AI, cloud computing, and web development. Network with industry professionals and discover new opportunities.',
    date: new Date('2024-12-15'),
    time: '09:00 AM',
    location: 'Convention Center, San Francisco',
    category: 'Technology',
    capacity: 500,
    ticketPrice: 299,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    organizerId: 'organizer_123',
    createdAt: new Date(),
  },
  {
    title: 'Startup Networking Night',
    description: 'Connect with entrepreneurs, investors, and fellow startup enthusiasts. Share ideas, find co-founders, and learn from successful founders. This is a free event with refreshments provided. Perfect for anyone interested in the startup ecosystem.',
    date: new Date('2024-11-20'),
    time: '06:00 PM',
    location: 'Innovation Hub, New York',
    category: 'Business',
    capacity: 150,
    ticketPrice: 0,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    organizerId: 'organizer_123',
    createdAt: new Date(),
  },
  {
    title: 'Contemporary Art Gallery Opening',
    description: 'Experience contemporary art from emerging artists in our new gallery space. The exhibition features paintings, sculptures, and digital art from 20 talented artists. Wine and appetizers will be served. Meet the artists and discuss their work.',
    date: new Date('2024-11-25'),
    time: '07:00 PM',
    location: 'Downtown Art Gallery, Seattle',
    category: 'Arts',
    capacity: 100,
    ticketPrice: 25,
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
    organizerId: 'organizer_456',
    createdAt: new Date(),
  },
  {
    title: 'City Marathon 2024',
    description: 'Annual city marathon with 5K, 10K, and full marathon options available. All skill levels welcome! Registration includes a t-shirt, finisher medal, and post-race refreshments. Proceeds benefit local charities. Register early for discounted rates.',
    date: new Date('2024-12-01'),
    time: '07:00 AM',
    location: 'City Park, Chicago',
    category: 'Sports',
    capacity: 1000,
    ticketPrice: 50,
    imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800',
    organizerId: 'organizer_456',
    createdAt: new Date(),
  },
  {
    title: 'Web Development Workshop',
    description: 'Hands-on workshop covering modern web development with React, Next.js, and TypeScript. Build a complete full-stack application from scratch. Suitable for developers with basic JavaScript knowledge. Laptops required. Limited seats available.',
    date: new Date('2024-11-28'),
    time: '10:00 AM',
    location: 'Tech Hub, Austin',
    category: 'Technology',
    capacity: 50,
    ticketPrice: 149,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    organizerId: 'organizer_123',
    createdAt: new Date(),
  },
  {
    title: 'Yoga & Meditation Retreat',
    description: 'Weekend retreat focusing on yoga, meditation, and wellness. Escape the city and reconnect with nature. Includes accommodation, healthy meals, and guided sessions. Perfect for beginners and experienced practitioners alike.',
    date: new Date('2024-12-10'),
    time: '08:00 AM',
    location: 'Mountain Resort, Colorado',
    category: 'Health',
    capacity: 30,
    ticketPrice: 399,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    organizerId: 'organizer_789',
    createdAt: new Date(),
  },
]

async function seedDatabase() {
  try {
    // 连接到 MongoDB
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // 清除现有数据
    await Event.deleteMany({})
    console.log('🗑️  Cleared existing events')

    // 插入示例数据
    await Event.insertMany(sampleEvents)
    console.log('✅ Successfully seeded 6 events')

    // 断开连接
    await mongoose.disconnect()
    console.log('👋 Disconnected from MongoDB')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

// 运行 seed 函数
seedDatabase()