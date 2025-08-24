import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { fetchTopHeadlines } from "../utils/api";

export default function NewsList({ category, searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError("");
      try {
        const news = await fetchTopHeadlines(category);
        const filtered = news.filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setArticles(filtered);
      } catch (err) {
        setArticles([]);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [category, searchQuery]);

  if (loading) return <p className="text-center py-6">Loading news...</p>;
  if (error) return <p className="text-center py-6 text-red-600">{error}</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 sm:p-4">
      {articles.length > 0
        ? articles.map((article, idx) => (
            <NewsCard key={idx} article={article} id={idx} />
          ))
        : <p className="text-center col-span-full">No articles found.</p>}
    </div>
  );
}
