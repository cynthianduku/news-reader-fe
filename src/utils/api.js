const API_KEY = "39f93e5f80304b829d8f2eeb33ba98d2";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query = "latest") => {
  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const data = await res.json();
    console.log("fetchNews | query:", query, "status:", data.status, "articles:", data.articles?.length);
    if (!res.ok || data.status !== "ok") throw new Error(data.message || "Failed to fetch news");
    return data.articles || [];
  } catch (err) {
    console.error("Error fetching news:", err.message);
    return [];
  }
};

export const fetchTopHeadlines = async (category = "general") => {
  try {
    const res = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${encodeURIComponent(category)}&pageSize=20&apiKey=${API_KEY}`
    );
    const data = await res.json();
    console.log("fetchTopHeadlines | category:", category, "status:", data.status, "articles:", data.articles?.length);
    if (!res.ok || data.status !== "ok") throw new Error(data.message || "Failed to fetch top headlines");
    return data.articles || [];
  } catch (err) {
    console.error("Error fetching top headlines:", err.message);
    return [];
  }
};
