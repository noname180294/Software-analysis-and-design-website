import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ backgroundColor: '#33334D' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <h3 className="h4 mb-3">FreeFireFiles</h3>
            <p className="small">Building the future through technology.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h4 className="h5 mb-3">Quick Links</h4>
            <div className="d-flex flex-column">
              <Link to="/services" className="text-light text-decoration-none mb-2 link-primary" >Services</Link>
              <Link to="/about" className="text-light text-decoration-none mb-2 link-primary">About Us</Link>
              <Link to="/contact" className="text-light text-decoration-none mb-2 link-primary">Contact</Link>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="h5 mb-3">Connect</h4>
            <div className="d-flex gap-3">
              <Link to="/github" className="text-light text-decoration-none link-primary">
                <IoLogoGithub size={24} />
              </Link>
              <Link to="/gmail" className="text-light text-decoration-none link-primary">
                <BiLogoGmail size={24} />
              </Link>
              <Link to="/linkedin" className="text-light text-decoration-none link-primary">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col text-center small">
            © 2025 FreeFireFiles. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;