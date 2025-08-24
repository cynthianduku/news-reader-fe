import { useState } from "react";

export default function Navbar({ onCategoryChange, onSearch }) {
  const [query, setQuery] = useState("");
  const categories = ["World", "Technology", "Sports", "Business", "Science"];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="text-2xl font-bold text-blue-700 text-center sm:text-left">
        NewsHub
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c.toLowerCase())}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition flex-shrink-0"
          >
            {c}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleSearch}
        className="flex gap-2 w-full sm:w-auto justify-center"
      >
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
