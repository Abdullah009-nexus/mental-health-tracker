"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Simple nav links array for easy mapping
  const navLinks = [
    { label: "Mood Tracker", href: "/mood" },
    { label: "Journal", href: "/journal" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/60 dark:bg-black/40 shadow-lg px-4 md:px-8 sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between h-16">
        {/* Logo/Title */}
        <a
          onClick={() => router.push("/")}
          className="text-2xl font-extrabold cursor-pointer select-none flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-300"
        >
          <span className="transition-all duration-300">🌿</span>
          <span className="hidden sm:inline-block">Mental Health</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => router.push(link.href)}
              className="relative px-2 py-1 font-medium text-base text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none"
            >
              <span className="z-10 relative">{link.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </button>
          ))}
          {/* Dark Mode Toggle */}
          <div className="ml-2 flex items-center">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-all duration-300"
            />
          </div>
          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback className="transition-transform duration-300 hover:scale-110">MH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => alert("Profile - Coming Soon!")}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Settings - Coming Soon!")}>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Logged Out!")}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-50"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-7 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 my-1 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 p-6 pt-20">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                setMenuOpen(false);
                router.push(link.href);
              }}
              className="text-lg font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-300 text-left"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-600 dark:text-gray-300 text-sm">Dark Mode</span>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-all duration-300"
            />
          </div>
          <div className="mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback className="transition-transform duration-300 hover:scale-110">MH</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => alert("Profile - Coming Soon!")}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert("Settings - Coming Soon!")}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert("Logged Out!")}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
