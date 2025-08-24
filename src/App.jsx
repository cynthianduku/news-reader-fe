import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

export default function App() {
  const [category, setCategory] = useState("technology");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar onCategoryChange={setCategory} onSearch={setSearchQuery} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center py-6">
            NewsHub
          </h1>
          <Routes>
            <Route
              path="/"
              element={<NewsList category={category} searchQuery={searchQuery} />}
            />
            <Route path="/article/:id" element={<NewsDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
