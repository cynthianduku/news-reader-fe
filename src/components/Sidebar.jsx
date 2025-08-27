import React from "react";

const Sidebar = ({ categories, onSelect }) => {
  return (
    <aside className="bg-white shadow-md rounded-lg p-4 hidden md:block w-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect(cat)}
              className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
