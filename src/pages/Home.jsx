import NewsList from "../components/NewsList";

export default function Home({ searchQuery }) {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Headlines</h1>
      <NewsList searchQuery={searchQuery} />
    </main>
  );
}
