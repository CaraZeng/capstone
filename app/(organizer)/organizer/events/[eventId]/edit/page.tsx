export default async function EditEventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Edit Event</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">Editing Event ID:</p>
        <p className="text-2xl font-mono font-bold text-blue-600">
          {eventId}
        </p>
      </div>
      <div className="bg-white border rounded-lg p-6">
        <p className="text-gray-600">
          Event edit form will be implemented here.
        </p>
      </div>
    </div>
  );
}