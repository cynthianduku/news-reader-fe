import React from "react";

const NewsCard = ({ title, description, image, url }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-[320px] h-[480px]">
      <img
        src={image || "https://via.placeholder.com/800x450"}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 text-left">
          {title || "No Title"}
        </h2>
        <p className="text-gray-700 text-sm flex-1 line-clamp-3 text-left">
          {description || "No description available."}
        </p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-blue-600 hover:underline text-left font-medium"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
