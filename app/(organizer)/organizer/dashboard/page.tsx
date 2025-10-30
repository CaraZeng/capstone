import Link from "next/link";

export default function OrganizerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Events</h1>
      
      <div className="grid gap-4 mb-6">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Sample Event 1</h3>
          <p className="text-gray-600 mb-4">Placeholder event</p>
          <div className="flex gap-3">
            <Link 
              href="/organizer/events/1/edit"
              className="text-blue-600 hover:underline"
            >
              Edit
            </Link>
            <Link 
              href="/organizer/events/1/attendees"
              className="text-blue-600 hover:underline"
            >
              View Attendees
            </Link>
          </div>
        </div>
      </div>
      
      <Link 
        href="/organizer/events/create"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Create New Event
      </Link>
    </div>
  );
}