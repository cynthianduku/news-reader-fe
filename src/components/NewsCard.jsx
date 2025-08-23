export default function NewsCard({ article }) {
  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString()
    : "";

  return (
    <div className="bg-white rounded-lg shadow flex flex-col h-full max-w-xs">
  {article.urlToImage && (
    <img
      src={article.urlToImage}
      alt={article.title}
      className="w-full h-32 object-cover rounded-t-lg"
    />
  )}
  <div className="p-3 flex flex-col flex-1">
    <h3 className="font-bold text-base mb-1 line-clamp-2">{article.title}</h3>
    <p className="text-sm text-gray-600 mb-2 line-clamp-3">
      {article.description || "No description available."}
    </p>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto text-blue-600 text-sm font-medium hover:underline"
    >
      Read more →
    </a>
  </div>
</div>
  );
}
