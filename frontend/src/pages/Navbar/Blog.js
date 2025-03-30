import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaArrowRight, FaCalendarAlt, FaUser, FaTag, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Tips for IT Freelancers",
      date: "March 30, 2025",
      author: "John Doe",
      category: "Freelancing",
      location: "New York, USA",
      content: "Freelancing in IT can be rewarding if you follow the right strategies...",
    },
    {
      id: 2,
      title: "How to Get Your First Gig",
      date: "March 25, 2025",
      author: "Jane Smith",
      category: "Career Advice",
      location: "San Francisco, USA",
      content: "Finding your first freelance job may seem hard, but with these steps...",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center text-pink-500">
          <IoNewspaperOutline className="mr-2" /> Blog
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded-lg shadow-lg border text-pink-500" // Apply text-pink-500 to the entire card
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="flex items-center mt-1">
                <FaCalendarAlt className="mr-2" /> {post.date}
              </p>
              <p className="flex items-center mt-1">
                <FaUser className="mr-2" /> {post.author}
              </p>
              <p className="flex items-center mt-1">
                <FaTag className="mr-2" /> {post.category}
              </p>
              <p className="flex items-center mt-1">
                <FaMapMarkerAlt className="mr-2" /> {post.location}
              </p>
              <p className="mt-2">{post.content}</p>
              <button className="mt-3 text-white bg-pink-500 px-4 py-2 rounded-lg flex items-center hover:bg-pink-600 transition">
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