import React, { useState } from 'react';
import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin, 
  FaCode, 
  FaBuilding, 
  FaPhone 
} from 'react-icons/fa';

const ProfessionalFooter = () => {
  const [activeModal, setActiveModal] = useState(null);

  const ModalOverlay = ({ title, children }) => (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1050 }}
    >
      <div 
        className="bg-white rounded-3 shadow-lg p-5" 
        style={{ 
          maxWidth: '800px', 
          width: '90%', 
          maxHeight: '80vh', 
          overflowY: 'auto' 
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">{title}</h2>
          <button 
            className="btn-close" 
            onClick={() => setActiveModal(null)}
          ></button>
        </div>
        {children}
      </div>
    </div>
  );

  const ServicesModal = () => (
    <ModalOverlay title="Our Professional Services">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <FaCode className="text-primary mb-3" size={50} />
              <h5 className="card-title">Software Development</h5>
              <p className="card-text text-muted">
                Custom software solutions tailored to your business needs, leveraging 
                cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <FaBuilding className="text-success mb-3" size={50} />
              <h5 className="card-title">Mobile Development</h5>
              <p className="card-text text-muted">
              Mobile development is the process of creating software for mobile devices, aiming to meet usage needs on Android and iOS platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 border-0 text-center">
            <div className="card-body">
              <FaPhone className="text-info mb-3" size={50} />
              <h5 className="card-title">Consulting</h5>
              <p className="card-text text-muted">
                Strategic technology consulting to help you make informed 
                decisions and stay ahead in the rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );

  const AboutModal = () => (
    <ModalOverlay title="About FreeFireFiles">
      <div className="row">
        <div className="col-md-8">
          <h4 className="mb-3">Our Vision</h4>
          <p>
            FreeFireFiles is a forward-thinking technology company committed to 
            delivering innovative solutions that transform businesses. Founded in 2025, 
            we specialize in creating scalable, efficient, and cutting-edge technological 
            solutions that drive growth and digital innovation.
          </p>
          <h4 className="mt-4 mb-3">Core Values</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>• Innovation:</strong> Continuously pushing technological boundaries
            </li>
            <li className="mb-2">
              <strong>• Integrity:</strong> Maintaining highest standards of professional ethics
            </li>
            <li className="mb-2">
              <strong>• Excellence:</strong> Delivering exceptional quality in every project
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card bg-light border-0">
            <div className="card-body">
              <h5 className="card-title">Company Snapshot</h5>
              <ul className="list-unstyled">
                <li><strong>Founded:</strong> 2025</li>
                <li><strong>Employees:</strong> 4</li>
                <li><strong>Headquarters:</strong> UMT</li>
                <li><strong>Focus:</strong> Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );

  return (
    <>
      {activeModal === 'services' && <ServicesModal />}
      {activeModal === 'about' && <AboutModal />}

      <footer 
        className="bg-dark py-5" 
        style={{ backgroundColor: '#1a1a2e' }}
      >
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h3 className="h4 mb-3" style={{ color: '#FFB6C1' }}>FreeFireFiles</h3>
              <p className="text-white">
                Empowering businesses through innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h4 className="h5 mb-3" style={{ color: '#FFB6C1' }}>Explore</h4>
              <div className="d-flex flex-column">
                <button 
                  onClick={() => setActiveModal('services')}
                  className="btn btn-link text-white text-decoration-none p-0 text-start mb-2"
                  style={{ '&:hover': { color: '#FFB6C1' } }}
                >
                  Our Services
                </button>
                <button 
                  onClick={() => setActiveModal('about')}
                  className="btn btn-link text-white text-decoration-none p-0 text-start mb-2"
                  style={{ '&:hover': { color: '#FFB6C1' } }}
                >
                  About Us
                </button>
                <a 
                  href="#contact" 
                  className="text-white text-decoration-none mb-2"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Social Connect */}
            <div className="col-md-4 mb-4">
              <h4 className="h5 mb-3" style={{ color: '#FFB6C1' }}>Connect With Us</h4>
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com/vina123baov" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://mail.google.com/mail/u/0/#inbox" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  <FaEnvelope size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="row border-top border-secondary pt-3 mt-3">
            <div className="col text-center text-white">
              © 2025 FreeFireFiles. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProfessionalFooter;