import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Navbar />
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
