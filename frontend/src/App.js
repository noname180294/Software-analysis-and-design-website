import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Register from './pages/Register'

// for nav
import Findtalent from './pages/Navbar/Findtalent';
import Findjob from './pages/Navbar/Findjob';
import News from './pages/Navbar/News';
import Pricing from './pages/Navbar/Pricing';

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

        {/* authenticate */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
