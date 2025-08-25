import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4 md:p-8">
        <Home />
      </main>
    </div>
  );
}

export default App;
