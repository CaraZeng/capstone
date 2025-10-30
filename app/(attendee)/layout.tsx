"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AttendeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname.startsWith(path);

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
                  pathname === "/" 
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-700"
                }`}
              >
                Browse Events
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
    </div>
  );
}