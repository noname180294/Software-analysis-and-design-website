import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const newsArticles = [
  { 
    title: "Tech Industry Growth in 2025", 
    date: "Feb 19, 2025", 
    content: "The tech industry is expected to grow significantly with new advancements in AI and blockchain.",
    readTime: "5 min read",
    author: "Tech Insights"
  },
  { 
    title: "Freelancing Trends", 
    date: "Feb 18, 2025", 
    content: "Freelancing continues to rise as more professionals seek flexibility in their careers.",
    readTime: "4 min read",
    author: "Career Weekly"
  },
  { 
    title: "Remote Work Success Stories", 
    date: "Feb 17, 2025", 
    content: "Companies share their success stories of transitioning to fully remote work environments.",
    readTime: "6 min read",
    author: "Workplace Today"
  },
];

const News = () => {
  const [search, setSearch] = useState("");

  const filteredNews = newsArticles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="min-vh-100 py-5 container">
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <h1 className="display-4 text-white fw-bold m-0">
            Find the Best Talent
          </h1>
        <div className="bg-black p-3 rounded-circle">
            <IoNewspaperOutline className="text-warning" style={{ fontSize: '2.5rem' }} />
        </div>
      </div>
      
      <div className="row">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div 
                className="card border-0 shadow-lg w-100 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF, #FFF0F3)',
                  transition: 'all 0.3s ease',
                  transform: 'perspective(1000px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotateX(5deg) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 30px rgba(255, 158, 170, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotateX(0) rotateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 158, 170, 0.2)';
                }}
              >
                {/* Decorative Element */}
                <div 
                  className="position-absolute top-0 end-0" 
                  style={{
                    width: '70px',
                    height: '10px',
                    background: '#FF9EAA',
                    transform: 'rotate(45deg) translate(35%, -35%)',
                    zIndex: 1
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: '#FF9EAA', 
                        color: 'white',
                        padding: '0.5rem'
                      }}
                    >
                      {article.author}
                    </span>
                    <div className="text-muted d-flex align-items-center">
                      <FaCalendarAlt className="me-2" style={{ color: '#FF9EAA' }} />
                      <small>{article.date}</small>
                    </div>
                  </div>

                  <h2 className="card-title h4 mb-3" style={{ color: '#333' }}>
                    {article.title}
                  </h2>

                  <p className="card-text text-muted flex-grow-1">
                    {article.content}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span 
                      className="text-muted" 
                      style={{ fontStyle: 'italic' }}
                    >
                      {article.readTime}
                    </span>

                    <button 
                      className="btn btn-outline-primary rounded-pill" 
                      style={{
                        borderColor: '#FF9EAA',
                        color: '#FF9EAA',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF9EAA';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#FF9EAA';
                      }}
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No news found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default News;