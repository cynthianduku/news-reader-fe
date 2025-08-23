import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onSearch={setSearchQuery} />
      <Home searchQuery={searchQuery} />
    </div>
  );
}

export default App;
