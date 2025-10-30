export default function AttendeeProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      <div className="bg-white border rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p className="text-gray-600">
          User profile information will be displayed here.
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">My Registered Events</h2>
        <p className="text-gray-600">
          List of events the user has registered for will appear here.
        </p>
      </div>
    </div>
  );
}