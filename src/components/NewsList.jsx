import { useEffect, useState } from "react";
import { fetchNews } from "../utils/api";
import NewsCard from "./NewsCard";
import Loading from "./Loading";
import Error from "./Error";

export default function NewsList({ searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchNews(searchQuery || "technology")
      .then((data) => {
        setArticles(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {articles.map((a, i) => (
      <NewsCard key={i} article={a} />
    ))}
  </div>
);
}
