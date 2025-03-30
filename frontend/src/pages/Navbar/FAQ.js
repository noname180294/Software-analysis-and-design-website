import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsBox2Heart } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: "How do I create an account?", answer: "You can sign up using your email or social media.", open: false },
    { question: "How can I find jobs?", answer: "Use the 'Find Job' section to browse available freelance jobs.", open: false },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <BsBox2Heart className="mr-2" /> Frequently Asked Questions
        </h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <FaArrowRight className={`transform transition-transform ${faq.open ? "rotate-90" : ""}`} />
              </div>
              {faq.open && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
