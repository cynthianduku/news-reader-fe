export const NEWS_CATEGORIES = [
 { id: 'world', name: 'World', slug: 'world', color: 'orange', description: 'International news and global events' },
 { id: 'technology', name: 'Technology', slug: 'technology', color: 'teal', description: 'Latest tech innovations and digital trends' },
 { id: 'sports', name: 'Sports', slug: 'sports', color: 'teal', description: 'Sports news and athletic achievements' },
 { id: 'business', name: 'Business', slug: 'business', color: 'red', description: 'Business news and market updates' },
 { id: 'science', name: 'Science', slug: 'science', color: 'purple', description: 'Scientific discoveries and research' }
];

export const MOCK_NEWS = [
 {
  id: '1',
  title: 'Revolutionary AI Breakthrough Changes Medical Diagnostics',
  excerpt: 'Scientists develop new AI system that can detect diseases with 99% accuracy, revolutionizing healthcare diagnostics worldwide.',
  content: 'A groundbreaking artificial intelligence system has been developed that can diagnose medical conditions with unprecedented accuracy. The system, created by researchers at leading medical institutions, uses advanced machine learning algorithms to analyze medical imaging and patient data...',
  author: 'Dr. Sarah Johnson',
  publishedAt: '2025-01-01T10:00:00Z',
  category: 'technology',
  tags: ['AI', 'Healthcare', 'Medical', 'Innovation'],
  imageUrl: '/api/placeholder/400/250',
  source: 'TechNews Today',
  url: '#'
 },
 {
  id: '2',
  title: 'Championship Finals Draw Record Viewership',
  excerpt: 'Over 50 million viewers tuned in to watch the historic championship game, setting new broadcasting records.',
  content: 'The championship finals attracted a record-breaking audience of over 50 million viewers worldwide, making it one of the most-watched sporting events in recent history. The thrilling match showcased exceptional athletic performance...',
  author: 'Mike Rodriguez',
  publishedAt: '2025-01-01T14:30:00Z',
  category: 'sports',
  tags: ['Championship', 'Sports', 'Broadcasting', 'Records'],
  imageUrl: '/api/placeholder/400/250',
  source: 'Sports Central',
  url: '#'
 },
 {
  id: '3',
  title: 'Global Markets Surge on Economic Recovery Signs',
  excerpt: 'Stock markets reach new highs as economic indicators show strong recovery across major economies.',
  content: 'Global financial markets experienced significant gains today as new economic data revealed robust recovery indicators across multiple sectors. The positive trends suggest sustained economic growth...',
  author: 'Emily Chen',
  publishedAt: '2025-01-01T09:15:00Z',
  category: 'business',
  tags: ['Markets', 'Economy', 'Finance', 'Recovery'],
  imageUrl: '/api/placeholder/400/250',
  source: 'Financial Weekly',
  url: '#'
 },
 {
  id: '4',
  title: 'Space Mission Discovers New Exoplanet',
  excerpt: "NASA's latest mission finds potentially habitable planet 100 light-years away, opening new possibilities for space exploration.",
  content: 'NASA scientists have announced the discovery of a potentially habitable exoplanet located approximately 100 light-years from Earth. The planet, designated as Kepler-442c, shows promising signs...',
  author: 'Prof. David Kim',
  publishedAt: '2025-01-01T16:45:00Z',
  category: 'science',
  tags: ['NASA', 'Space', 'Exoplanet', 'Discovery'],
  imageUrl: '/api/placeholder/400/250',
  source: 'Science Today',
  url: '#'
 },
 {
  id: '5',
  title: 'International Trade Agreement Signed',
  excerpt: 'Historic trade deal between major economies promises economic growth and stronger international cooperation.',
  content: 'World leaders have signed a comprehensive trade agreement that is expected to boost global economic growth and strengthen international cooperation. The landmark deal covers multiple sectors...',
  author: 'Ambassador Lisa Park',
  publishedAt: '2025-01-01T12:00:00Z',
  category: 'world',
  tags: ['Trade', 'International', 'Economy', 'Diplomacy'],
  imageUrl: '/api/placeholder/400/250',
  source: 'Global Affairs',
  url: '#'
 }
];

export const getCategoryBySlug = (slug) => NEWS_CATEGORIES.find(cat => cat.slug === slug);
export const getArticlesByCategory = (category) => category === 'all' ? MOCK_NEWS : MOCK_NEWS.filter(article => article.category === category);
export const getArticleById = (id) => MOCK_NEWS.find(article => article.id === id);
export const searchArticles = (query) => {
 const lower = query.toLowerCase();
 return MOCK_NEWS.filter(article =>
  article.title.toLowerCase().includes(lower) ||
  article.excerpt.toLowerCase().includes(lower) ||
  article.tags.some(tag => tag.toLowerCase().includes(lower))
 );
};

export const fetchNewsFromAPI = async (category = 'all', page = 1, pageSize = 10) => {
 const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
 const url = category === 'all'
  ? `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
  : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
 const res = await fetch(url);
 const data = await res.json();
 return data.articles || [];
};
