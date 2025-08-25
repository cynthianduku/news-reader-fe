import React from "react";
import Sidebar from "../components/Sidebar";
import NewsCard from "../components/NewsCard";

const placeholderNews = [
  {
    title: "Breaking News 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Breaking News 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Breaking News 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Breaking News 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Breaking News 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200"
  },
];

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <Sidebar />
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderNews.map((news, idx) => (
          <NewsCard
            key={idx}
            title={news.title}
            description={news.description}
            image={news.image}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
