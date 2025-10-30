export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">Event ID from URL:</p>
        <p className="text-2xl font-mono font-bold text-blue-600">
          {eventId}
        </p>
      </div>
      <p className="text-gray-600">
        This page will display detailed information about the event.
      </p>
    </div>
  );
}