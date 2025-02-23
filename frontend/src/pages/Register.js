import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [isHovered, setIsHovered] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
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
                  <h2 className="text-center mb-4 text-white">Create Account</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                      <input
                        type="text"
                        className={`form-control bg-dark text-white border-dark ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-white">Email address</label>
                      <input
                        type="email"
                        className={`form-control bg-dark text-white border-dark ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label text-white">Password</label>
                      <input
                        type="password"
                        className={`form-control bg-dark text-white border-dark ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                      <input
                        type="password"
                        className={`form-control bg-dark text-white border-dark ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className={`form-check-input ${errors.agreeToTerms ? 'is-invalid' : ''}`}
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-white" htmlFor="agreeToTerms">
                        I agree to the Terms and Conditions
                      </label>
                      {errors.agreeToTerms && <div className="invalid-feedback">{errors.agreeToTerms}</div>}
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
                      Sign Up
                    </button>
                    <div className="text-center text-white">
                      <span className="me-2">Already have an account?</span>
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
                        Login
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

export default Register;