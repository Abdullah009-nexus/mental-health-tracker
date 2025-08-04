import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import { usePathname } from "next/navigation"; // 👈 Client-side path hook
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soul Track",
  description: "AI-powered wellbeing companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const showMainNavbar = !pathname.startsWith("/dashboard") && pathname !== "/login";

  return (
    <html lang="en">
      <body className={inter.className}>
        {showMainNavbar && <Navbar />}
        <main className={showMainNavbar ? "pt-20" : ""}>{children}</main>
      </body>
    </html>
  );
}
