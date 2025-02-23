import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }

    // Here you would typically make an API call to handle password reset
    setSuccessMessage('If an account exists with this email, you will receive password reset instructions.');
    setEmail('');
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#000000' }}>
      <Navbar />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card" style={{ backgroundColor: '#2d2d2d', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}>
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-white">Forgot Password</h2>
                  <p className="text-white text-center mb-4">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>
                  {successMessage && (
                    <div className="alert alert-success" role="alert">
                      {successMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-white">Email address</label>
                      <input
                        type="email"
                        className={`form-control bg-dark text-white border-dark ${error ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                      {error && <div className="invalid-feedback">{error}</div>}
                    </div>
                    <button 
                      type="submit" 
                      className="btn w-100 mb-3"
                      style={{ 
                        backgroundColor: isHovered ? '#FF9EAA' : '#FFD0D0',
                        color: '#000000',
                        border: 'none',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Reset Password
                    </button>
                    <div className="text-center">
                      <Link 
                        to="/login" 
                        className="text-decoration-none" 
                        style={{ 
                          color: '#FFD0D0',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#FF9EAA'}
                        onMouseLeave={(e) => e.target.style.color = '#FFD0D0'}
                      >
                        Back to Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;