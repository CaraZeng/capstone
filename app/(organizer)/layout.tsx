"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OrganizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <Link href="/" className="text-2xl font-bold">
            EventHub
          </Link>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/organizer/dashboard"
                className={`block px-4 py-3 rounded-lg transition ${
                  isActive("/organizer/dashboard")
                    ? "bg-blue-600 font-semibold" 
                    : "hover:bg-gray-800"
                }`}
              >
                My Events
              </Link>
            </li>
            <li>
              <Link 
                href="/organizer/events/create"
                className={`block px-4 py-3 rounded-lg transition ${
                  isActive("/organizer/events/create")
                    ? "bg-blue-600 font-semibold" 
                    : "hover:bg-gray-800"
                }`}
              >
                Create Event
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}