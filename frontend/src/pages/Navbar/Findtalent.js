import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const talents = [
  { name: "Thai Bao", skill: "Frontend Developer", experience: "5 years", 
    details: { location: "Ho Chi Minh", company: "TechInnovate", skills: ["React", "JavaScript", "CSS"] } },
  { name: "Tram Anh", skill: "UI/UX Designer", experience: "3 years", 
    details: { location: "San Francisco", company: "DesignWorks", skills: ["Figma", "Adobe XD", "Sketch"] } },
  { name: "Phuoc Hieu", skill: "React Developer", experience: "4 years", 
    details: { location: "Global", company: "CodeCraft", skills: ["React", "Redux", "GraphQL"] } },
  { name: "Son Tan", skill: "Api", experience: "6 years", 
    details: { location: "Remote", company: "CloudSphere", skills: ["Python", "Django", "AWS"] } },
];

const FindTalent = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTalents = talents.filter(
    (talent) =>
      (filter === "All" || talent.skill === filter) &&
      talent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar/>
      <div className="min-vh-100 py-5 container">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <h1 className="display-4 text-white fw-bold m-0">
            Find the Best Talent
          </h1>
          <div className="bg-black p-3 rounded-circle">
            <PiSuitcaseSimple className="text-warning" style={{ fontSize: '2.5rem' }} />
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-8">
            <input
              className="form-control"
              placeholder="Search talent by name..."
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
              <option value="All">All Skills</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="React Developer">React Developer</option>
              <option value="Backend Developer">Backend Developer</option>
            </select>
          </div>
        </div>
        
        <div className="row">
          {filteredTalents.length > 0 ? (
            filteredTalents.map((talent, index) => (
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
                        {talent.skill}
                      </span>
                      <div className="text-muted d-flex align-items-center">
                        <FaBuilding className="me-2" style={{ color: '#FF9EAA' }} />
                        <small>{talent.details.company}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#FFD700",
                          color: "#000",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                        }}
                      >
                        {talent.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="card-title h4 mb-1" style={{ color: '#333' }}>{talent.name}</h2>
                        <p className="text-muted small mb-0">{talent.experience}</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2" style={{ color: '#FF9EAA' }} />
                        <small className="text-muted">{talent.details.location}</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted">Required Skills:</small>
                      <div className="d-flex flex-wrap gap-2 mt-1">
                        {talent.details.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="badge" 
                            style={{ 
                              backgroundColor: 'rgba(255, 158, 170, 0.2)', 
                              color: '#FF9EAA',
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
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FF9EAA';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#FF9EAA';
                        }}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No talent found.</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FindTalent;