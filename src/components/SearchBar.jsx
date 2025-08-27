import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search news..."
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-nh-blue"
        />
        <div className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</div>
      </div>
    </div>
  );
}
