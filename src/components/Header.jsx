import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Newshub</h1>
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
      </nav>
    </header>
  );
};

export default Header;
