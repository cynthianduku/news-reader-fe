const API_KEY = "39f93e5f80304b829d8f2eeb33ba98d2"; 
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query = "latest") => {
  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}&pageSize=10`
    );
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.articles;
  } catch (err) {
    throw err;
  }
};
