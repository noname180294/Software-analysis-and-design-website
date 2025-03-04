import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BsBox2Heart } from "react-icons/bs";
import { FaMapMarkerAlt, FaBuilding, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

const jobs = [
  { 
    title: "Frontend Developer", 
    type: "Full-time", 
    salary: "$4000/month",
    company: "TechInnovate",
    location: "Remote",
    skills: ["React", "JavaScript", "CSS"]
  },
  { 
    title: "UI/UX Designer", 
    type: "Part-time", 
    salary: "$2000/month",
    company: "DesignWorks",
    location: "San Francisco",
    skills: ["Figma", "Adobe XD", "Sketch"]
  },
  { 
    title: "React Developer", 
    type: "Freelance", 
    salary: "$30/hour",
    company: "CodeCraft",
    location: "Global",
    skills: ["React", "Redux", "GraphQL"]
  },
  { 
    title: "Backend Developer", 
    type: "Full-time", 
    salary: "$4500/month",
    company: "CloudSphere",
    location: "New York",
    skills: ["Python", "Django", "AWS"]
  },
  { 
    title: "Data Scientist", 
    type: "Part-time", 
    salary: "$3500/month",
    company: "DataDynamics",
    location: "Boston",
    skills: ["Machine Learning", "Python", "SQL"]
  },
  { 
    title: "Project Manager", 
    type: "Full-time", 
    salary: "$5000/month",
    company: "AgileHub",
    location: "Chicago",
    skills: ["Agile", "Scrum", "Jira"]
  },
  { 
    title: "Marketing Specialist", 
    type: "Freelance", 
    salary: "$40/hour",
    company: "GrowthMasters",
    location: "Remote",
    skills: ["SEO", "Content Marketing", "Analytics"]
  },
  { 
    title: "DevOps Engineer", 
    type: "Full-time", 
    salary: "$5500/month",
    company: "InfraScale",
    location: "Seattle",
    skills: ["Kubernetes", "Docker", "CI/CD"]
  },
  { 
    title: "Cybersecurity Analyst", 
    type: "Part-time", 
    salary: "$4000/month",
    company: "SecureNet",
    location: "Washington DC",
    skills: ["Network Security", "Penetration Testing", "Compliance"]
  },
  { 
    title: "Product Designer", 
    type: "Freelance", 
    salary: "$35/hour",
    company: "DesignPro",
    location: "Global",
    skills: ["UX Research", "Prototyping", "Design Thinking"]
  }
];

const FindJob = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showCVForm, setShowCVForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      (filter === "All" || job.type === filter) &&
      job.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowCVForm(true);
    setSubmitted(false);
  };

  const handleSubmitCV = () => {
    setShowCVForm(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setShowCVForm(false);
  };

  const validatePhoto = (file) => {
    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      alert("Only passport-sized photos (JPG/PNG) are allowed.");
      return false;
    }
    return true;
  };

  return (
    <>
    <Navbar/>
    <div className="min-vh-100 py-5 container">
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        <h1 className="display-4 text-white fw-bold m-0">
          Find the Best Job
        </h1>
        <div className="bg-black p-3 rounded-circle">
          <BsBox2Heart className="text-warning" style={{ fontSize: '2.5rem' }} />
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              backgroundColor: 'rgba(247, 247, 247, 0.82)',
              borderColor: '#FF9EAA',
              color: 'white'
            }}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              backgroundColor: '#FF9EAA',
              borderColor: '#FF9EAA',
              color: 'white'
            }}
          >
            <option value="All">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
      </div>
      
      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <motion.div 
                className="card border-0 shadow-lg w-100 position-relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF, #FFF0F3)',
                  transition: 'all 0.3s ease',
                  transform: 'perspective(1000px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) rotateX(5deg) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = '0 20px 30px rgba(255, 158, 170, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotateX(0) rotateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 158, 170, 0.2)';
                }}
              >
                {/* Decorative Element */}
                <div 
                  className="position-absolute top-0 end-0" 
                  style={{
                    width: '70px',
                    height: '10px',
                    background: '#FF9EAA',
                    transform: 'rotate(45deg) translate(35%, -35%)',
                    zIndex: 1
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: '#FF9EAA', 
                        color: 'white',
                        padding: '0.5rem'
                      }}
                    >
                      {job.type}
                    </span>
                    <div className="text-muted d-flex align-items-center">
                      <FaBuilding className="me-2" style={{ color: '#FF9EAA' }} />
                      <small>{job.company}</small>
                    </div>
                  </div>

                  <h2 className="card-title h4 mb-3" style={{ color: '#333' }}>
                    {job.title}
                  </h2>

                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2" style={{ color: '#FF9EAA' }} />
                      <small className="text-muted">{job.location}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaMoneyBillWave className="me-2" style={{ color: '#FF9EAA' }} />
                      <small className="text-muted">{job.salary}</small>
                    </div>
                  </div>

                  <div className="mb-3">
                    <small className="text-muted">Required Skills:</small>
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      {job.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="badge" 
                          style={{ 
                            backgroundColor: 'rgba(255, 158, 170, 0.2)', 
                            color: '#FF9EAA',
                            marginRight: '20px' // Added margin-right of 20px
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button 
                      className="btn btn-outline-primary rounded-pill w-100" 
                      style={{
                        borderColor: '#FF9EAA',
                        color: '#FF9EAA',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => handleApply(job)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FF9EAA';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#FF9EAA';
                      }}
                    >
                      Apply Now <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No jobs found.</p>
        )}
      </div>

      {/* Rest of the component remains the same */}
      {showCVForm && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content p-4">
              <h2 className="h5">Apply for {selectedJob?.title}</h2>
              <input className="form-control my-2" placeholder="Full Name" />
              <input className="form-control my-2" placeholder="Email" />
              <input className="form-control my-2" placeholder="Phone Number" />
              <input className="form-control my-2" placeholder="LinkedIn Profile" />
              <input className="form-control my-2" placeholder="GitHub Profile" />
              <input className="form-control my-2" type="file" accept="image/*" placeholder="Choose Front Side Identify Card" />
              <input className="form-control my-2" type="file" accept="image/*" placeholder="Choose Back Side Identify Card" />
              <input 
                className="form-control my-2" 
                type="file" 
                accept="image/jpeg, image/png" 
                onChange={(e) => validatePhoto(e.target.files[0])} 
                placeholder="Upload Passport-Sized Photo" 
              />
              <textarea className="form-control my-2" placeholder="Talk About Yourself"></textarea>
              <div className="d-flex justify-content-between">
                <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmitCV}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div className="modal show d-block" tabIndex="-1" onClick={() => setSubmitted(false)}>
          <div className="modal-dialog">
            <div className="modal-content p-4 text-center">
              <h3 className="text-success">Your application has been submitted! 🎉</h3>
              <p>Waiting for a response from the employer.</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default FindJob;