import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        if (response.data && response.data.articles) {
          setArticles(response.data.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <Sidebar />
      <main className="flex-1">
        {loading ? (
          <div className="text-center mt-16 text-gray-500">Loading news...</div>
        ) : articles.length === 0 ? (
          <div className="text-center mt-16 text-gray-500">No news articles found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {articles.map((news, idx) => (
              <NewsCard
                key={idx}
                title={news.title || "No Title"}
                description={news.description || "No description available."}
                image={news.urlToImage || "https://via.placeholder.com/400x200"}
                url={news.url}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
