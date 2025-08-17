const SearchBar = () => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search news..."
        className="p-2 border border-gray-300 rounded w-64"
      />
      <button className="ml-2 p-2 bg-blue-600 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
