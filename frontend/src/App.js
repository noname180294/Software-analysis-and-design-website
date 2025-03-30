import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPasswod'

// for nav
import Findtalent from './pages/Navbar/Findtalent';
import Findjob from './pages/Navbar/Findjob';
import News from './pages/Navbar/News';
import Pricing from './pages/Navbar/Pricing';
import FAQ from './pages/Navbar/FAQ';
import GradientText from './utilities/GradientText/GradientText';
import Blog from './pages/Navbar/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* for nav */}
        <Route path="/find-talent" element={<Findtalent />} />
        <Route path="/find-job" element={<Findjob />} />
        <Route path="/news" element={<News />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />

        {/* authenticate */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
