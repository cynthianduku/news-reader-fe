import { Link } from "react-router-dom";

export default function NewsCard({ article, id }) {
  return (
    <Link to={`/article/${id}`} state={{ article }}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 sm:h-40 md:h-48 object-cover rounded-t-2xl"
          />
        )}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900">
            {article.title}
          </h3>
          <p className="text-gray-700 text-sm line-clamp-3">
            {article.description?.slice(0, 100) || ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
