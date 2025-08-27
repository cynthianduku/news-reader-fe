import React from "react";

export default function NewsCard({ title, description, image, url, source }) {
  const fallback = "https://via.placeholder.com/400x200";
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <a href={url || "#"} target="_blank" rel="noreferrer">
        <img src={image || fallback} alt={title} className="w-full h-44 object-cover" />
      </a>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-semibold text-base line-clamp-2 mb-2">
          <a href={url || "#"} target="_blank" rel="noreferrer" className="text-gray-900">
            {title}
          </a>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 mb-3">{description || "No description available."}</p>
        <div className="mt-auto text-xs text-gray-500">{source ? `Source: ${source}` : "Source: Unknown"}</div>
      </div>
    </div>
  );
}
