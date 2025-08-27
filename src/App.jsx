import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-nh-graybg text-gray-900">
      <Header />
      <main className="flex-1 w-full max-w-screen-xl-custom mx-auto px-4 md:px-6 py-6">
        <Home />
      </main>
      <footer className="bg-white border-t mt-10">
        <div className="max-w-screen-xl-custom mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">NewsHub</h3>
            <p className="text-sm text-gray-600">Your trusted source for curated headlines and topical coverage.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>World</li>
              <li>Technology</li>
              <li>Sports</li>
              <li>Business</li>
              <li>Science</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-4">© {new Date().getFullYear()} NewsHub. All rights reserved.</div>
      </footer>
    </div>
  );
}
