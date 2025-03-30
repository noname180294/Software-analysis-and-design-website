import React from 'react';
import logo from '../imgs/logo.png';
import GradientText from '../utilities/GradientText/GradientText';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#33334D' }}>
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          <img src={logo} alt="logo" width="200" height="25" className="d-inline-block align-text-center" />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ backgroundColor: '#FFD0D0' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/find-talent" style={{ color: '#E0F7FA' }}>
                Find Talent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/find-job" style={{ color: '#E0F7FA' }}>
                Find Job
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/news" style={{ color: '#E0F7FA' }}>
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/pricing" style={{ color: '#E0F7FA' }}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/faq" style={{ color: '#E0F7FA' }}>
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/blog" style={{ color: '#E0F7FA' }}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex me-3">
            <Link to="/login" className="text-decoration-none">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="custom-class"
                >
                    Log In
                </GradientText>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
