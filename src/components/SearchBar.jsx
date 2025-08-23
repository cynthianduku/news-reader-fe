import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg p-2 shadow ml-4">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-2 py-1 w-48 md:w-64 outline-none text-black"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded ml-2">
        Search
      </button>
    </form>
  );
}
