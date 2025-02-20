import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const newsArticles = [
  { title: "Tech Industry Growth in 2025", date: "Feb 19, 2025", content: "The tech industry is expected to grow significantly with new advancements in AI and blockchain." },
  { title: "Freelancing Trends", date: "Feb 18, 2025", content: "Freelancing continues to rise as more professionals seek flexibility in their careers." },
  { title: "Remote Work Success Stories", date: "Feb 17, 2025", content: "Companies share their success stories of transitioning to fully remote work environments." },
];

const News = () => {
  const [search, setSearch] = useState("");

  const filteredNews = newsArticles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Latest News 📰</h1>
      
      <div className="mb-4">
        <input
          className="form-control"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <div className="row">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card p-3 shadow-sm">
                <h2 className="h5">{article.title}</h2>
                <p className="text-muted">{article.date}</p>
                <p>{article.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No news found.</p>
        )}
      </div>
    </div>
  );
};

export default News;