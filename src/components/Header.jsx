import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-screen-xl-custom mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold">NewsHub</div>
          <nav className="hidden md:flex items-center gap-3 text-sm text-gray-700">
            <a href="#" className="px-3 py-1 rounded bg-blue-50 text-nh-blue">Home</a>
            <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">World</a>
            <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Technology</a>
            <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Sports</a>
            <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Business</a>
            <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Science</a>
          </nav>
        </div>
        <div className="w-80 hidden md:block">
          <div className="relative">
            <input
              type="search"
              placeholder="Search news..."
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-nh-blue"
            />
            <div className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</div>
          </div>
        </div>
      </div>
    </header>
  );
}
