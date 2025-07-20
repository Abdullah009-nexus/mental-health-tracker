"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Heart, Calendar, BarChart3, BookOpen, Settings, Bell, User, Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(3);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-emerald-500 dark:bg-emerald-600">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MindTrack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/mood-check" icon={Calendar} text="Mood Check" />
            <NavItem href="/analytics" icon={BarChart3} text="Analytics" />
            <NavItem href="/journal" icon={BookOpen} text="Journal" />
            <NavItem href="/goals" icon={Settings} text="Goals" />
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Sign In Button */}
            <Link href="/auth/signin">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                Sign In
              </button>
            </Link>

            {/* User Profile (when signed in) */}
            <button className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="py-4 space-y-1">
              <MobileNavItem href="/mood-check" icon={Calendar} text="Mood Check" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/analytics" icon={BarChart3} text="Analytics" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/journal" icon={BookOpen} text="Journal" onClick={() => setIsMenuOpen(false)} />
              <MobileNavItem href="/goals" icon={Settings} text="Goals" onClick={() => setIsMenuOpen(false)} />
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Dark Mode
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
                </div>
                
                <Link href="/auth/signin" className="block px-4">
                  <button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ href, icon: Icon, text }: { href: string; icon: any; text: string }) {
  return (
    <Link href={href}>
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
        <span className="font-medium">{text}</span>
      </button>
    </Link>
  );
}

function MobileNavItem({ href, icon: Icon, text, onClick }: { href: string; icon: any; text: string; onClick: () => void }) {
  return (
    <Link href={href}>
      <button 
        className="flex items-center space-x-3 px-4 py-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        onClick={onClick}
      >
        <Icon className="h-5 w-5" />
        <span className="font-medium">{text}</span>
      </button>
    </Link>
  );
}