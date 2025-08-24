import NewsList from "../components/NewsList";

export default function Home({ searchQuery, category }) {
  return (
    <main className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Top Headlines
      </h1>
      <NewsList searchQuery={searchQuery} category={category} />
    </main>
  );
}
