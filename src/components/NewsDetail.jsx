import React from "react";

const NewsDetail = ({ article }) => {
  if (!article) return null;
  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="font-bold text-2xl">{article.title}</h2>
      <p className="mt-2 text-gray-700">{article.content || article.description}</p>
      <a href={article.url} target="_blank" className="text-blue-600 underline mt-2 inline-block">Read more</a>
    </div>
  );
};

export default NewsDetail;
