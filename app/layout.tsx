
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mental Health Tracker",
  description: "AI-powered wellbeing companion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main> {/* offset for fixed navbar */}
      </body>
    </html>
  );
}
