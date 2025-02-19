import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


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

        {/* for nav */}
        <Route path="/find-talent" element={<Findtalent />} />
        <Route path="/find-job" element={<Findjob />} />
        <Route path="/news" element={<News />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
