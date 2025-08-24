const API_KEY = "39f93e5f80304b829d8f2eeb33ba98d2";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query = "latest") => {
  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.articles || [];
  } catch (err) {
    console.error("Error fetching news:", err.message);
    return [];
  }
};

export const fetchTopHeadlines = async (category = "general") => {
  try {
    const res = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${encodeURIComponent(
        category
      )}&pageSize=20&apiKey=${API_KEY}`
    );
    if (!res.ok) throw new Error("Failed to fetch top headlines");
    const data = await res.json();
    return data.articles || [];
  } catch (err) {
    console.error("Error fetching top headlines:", err.message);
    return [];
  }
};
