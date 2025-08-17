export const fetchNews = async (endpoint) => {
  try {
    // Check if endpoint already has ? for query parameters
    const connector = endpoint.includes("?") ? "&" : "?";
    const res = await fetch(`${BASE_URL}/${endpoint}${connector}apiKey=${API_KEY}`);
    if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
    throw err;
  }
};
