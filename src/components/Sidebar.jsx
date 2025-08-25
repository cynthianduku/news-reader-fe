import React from "react";

const categories = ["All", "Business", "Tech", "Sports", "Health", "Entertainment"];

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-md rounded-lg p-4 hidden md:block w-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat} className="text-gray-600 hover:text-gray-900 cursor-pointer">{cat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
