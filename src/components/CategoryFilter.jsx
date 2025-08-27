import React from "react";

export default function CategoryFilter({ inline }) {
  const cats = ["All", "World", "Technology", "Sports", "Business", "Science"];
  if (inline) {
    return (
      <div className="flex items-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            className={`px-3 py-1 rounded-full text-sm ${c === "All" ? "bg-nh-blue text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {c}
          </button>
        ))}
      </div>
    );
  }
  return (
    <nav className="flex flex-wrap gap-2">
      {cats.map((c) => (
        <button key={c} className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700">
          {c}
        </button>
      ))}
    </nav>
  );
}
