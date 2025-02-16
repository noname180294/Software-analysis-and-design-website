import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindJob from './pages/FindJob'
import FindTalent from './pages/FindTalent'
import News from './pages/News'
import Pricing from './pages/Pricing'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/FindJob" element={<FindJob />} />
            <Route exact path="/FindTalent" element={<FindTalent />} />
            <Route exact path="/News" element={<News />} />
            <Route exact path="/Pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;