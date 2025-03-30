import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Blog = () => {
  const [posts] = useState([
    { id: 1, title: "Tips for IT Freelancers", date: "March 30, 2025", content: "Freelancing in IT can be rewarding if you follow the right strategies..." },
    { id: 2, title: "How to Get Your First Gig", date: "March 25, 2025", content: "Finding your first freelance job may seem hard, but with these steps..." },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <IoNewspaperOutline className="mr-2" /> Blog
        </h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 flex items-center">
                <FaCalendarAlt className="mr-2" /> {post.date}
              </p>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <button className="mt-3 text-blue-500 flex items-center">
                Read more <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
