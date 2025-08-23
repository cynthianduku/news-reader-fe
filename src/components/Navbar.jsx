import SearchBar from "./SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900 text-white shadow">
      <h1 className="text-2xl font-bold">NewsHub</h1>
      <div className="flex gap-4 mt-2 md:mt-0">
        <button className="hover:text-blue-400">World</button>
        <button className="hover:text-blue-400">Technology</button>
        <button className="hover:text-blue-400">Sports</button>
        <button className="hover:text-blue-400">Business</button>
        <button className="hover:text-blue-400">Science</button>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
