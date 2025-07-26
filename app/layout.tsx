// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindFlow - AI Mental Health Tracker",
  description: "Transform your mental health journey with intelligent AI insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const showNavbar = pathname !== "/login";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {showNavbar && <Navbar />}
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
