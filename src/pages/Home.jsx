export default function Home({ searchQuery }) {
  return (
    <main className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Showing results for: {searchQuery || "Top Headlines"}
      </h2>
      <div>
        {/* NewsList will go here */}
      </div>
    </main>
  );
}
