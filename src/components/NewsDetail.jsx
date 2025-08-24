import { useLocation, useParams } from "react-router-dom";

export default function NewsDetail() {
  const { state } = useLocation();
  const { article } = state || {};
  const { id } = useParams();

  if (!article) {
    return <p className="text-center text-gray-400">Article not found (ID: {id})</p>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow mt-6">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-80 object-cover rounded mb-4" />
      )}
      <h2 className="font-bold text-2xl mb-3">{article.title}</h2>
      <p className="mb-4 text-gray-300">{article.content || article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 underline"
      >
        Read full article
      </a>
    </div>
  );
}
