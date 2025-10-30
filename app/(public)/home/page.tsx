import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Browse Events</h1>
      <p className="text-gray-600 mb-8">
        Discover amazing events happening around you
      </p>
      
      {/* Placeholder for event list */}
      <div className="grid gap-4">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Sample Event</h3>
          <p className="text-gray-600 mb-4">This is a placeholder event</p>
          <Link 
            href="/events/1" 
            className="text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}