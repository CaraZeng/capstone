import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Management Platform",
  description: "Discover and manage amazing events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}