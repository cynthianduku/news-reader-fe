import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import NewsCard from "../components/NewsCard";

const FEATURED = {
  bigTitle: "Featured News",
  date: "2025-08-01",
  tag: "World",
  headline: "Breaking: Major Climate Summit Reaches Historic Agreement",
  excerpt:
    "World leaders unite on unprecedented climate action plan that could reshape global environmental policy for decades to come.",
  cta: "Read Full Story",
  image: null
};

const CARDS = [
  {
    id: "tech",
    header: "Tech News",
    color: "bg-nh-blue",
    items: [
      {
        title: "Revolutionary AI Breakthrough Changes Medical Diagnostics",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "sports",
    header: "Sports News",
    color: "bg-nh-teal",
    items: [
      {
        title: "Championship Finals Draw Record Viewership",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "business",
    header: "Business News",
    color: "bg-nh-red",
    items: [
      {
        title: "Global Markets Surge on Economic Recovery Signs",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "science",
    header: "Science News",
    color: "bg-nh-purple",
    items: [
      {
        title: "Space Mission Discovers New Exoplanet",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "world",
    header: "World News",
    color: "bg-nh-orange",
    items: [
      {
        title: "International Trade Agreement Signed",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "technology",
    header: "Technology",
    color: "bg-nh-teal",
    items: [
      {
        title: "Tech Giant Announces Quantum Computing Milestone",
        meta: "2025-08-01"
      }
    ]
  },
  {
    id: "olympics",
    header: "Olympics",
    color: "bg-nh-magenta",
    items: [
      {
        title: "Olympic Preparations Underway in Host City",
        meta: "2025-08-01"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">All</div>
          <CategoryFilter inline />
        </div>
        <SearchBar />
      </div>

      <section>
        <div className="bg-nh-blue h-40 md:h-56 rounded-md flex items-center justify-center text-white text-3xl md:text-5xl font-bold">
          {FEATURED.bigTitle}
        </div>

        <div className="bg-white rounded-lg shadow mt-4 p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{FEATURED.tag}</span>
            <span className="text-xs text-gray-500">{FEATURED.date}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">{FEATURED.headline}</h2>
          <p className="text-sm text-gray-700 mb-4">{FEATURED.excerpt}</p>
          <button className="px-4 py-2 bg-nh-blue text-white rounded">{FEATURED.cta}</button>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div key={card.id} className="space-y-3">
              <div className={`p-4 rounded-t-md ${card.color} text-white font-semibold`}>{card.header}</div>
              <div className="bg-white p-4 rounded-b-md shadow">
                {card.items.map((it, i) => (
                  <div key={i} className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">{it.meta}</div>
                    <h3 className="font-semibold text-sm mb-1">{it.title}</h3>
                    <a href="#" className="text-sm text-nh-blue hover:underline">
                      Read more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
