"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            EventHub
          </Link>
          
          <ul className="flex gap-6">
            <li>
              <Link 
                href="/"
                className={`hover:text-blue-600 transition ${
                  pathname === "/" || (pathname.startsWith("/events") && !pathname.includes("/organizer"))
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-700"
                }`}
              >
                Browse Events
              </Link>
            </li>
            <li>
              <Link 
                href="/organizer/dashboard"
                className={`hover:text-blue-600 transition ${
                  isActive("/organizer") 
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-700"
                }`}
              >
                Organizer Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/attendee/profile"
                className={`hover:text-blue-600 transition ${
                  isActive("/attendee") 
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-700"
                }`}
              >
                My Profile
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 EventHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}