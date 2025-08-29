import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-screen-xl-custom mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-nh-blue font-extrabold tracking-wide text-logo-mobile sm:text-logo-sm md:text-logo-md">
          NewsHub
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-3 text-sm text-gray-700">
          <a href="#" className="px-3 py-1 rounded bg-blue-50 text-nh-blue">Home</a>
          <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">World</a>
          <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Technology</a>
          <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Sports</a>
          <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Business</a>
          <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Science</a>
        </nav>

        {/* Search */}
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-32 md:w-40 border border-gray-200 rounded-full pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-nh-blue"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm cursor-pointer">
            🔍
          </span>
        </div>

      </div>
    </header>
  );
}
