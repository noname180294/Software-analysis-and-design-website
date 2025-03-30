import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  PiSuitcaseSimple 
} from "react-icons/pi";
import { 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp, 
  FaSkype, 
  FaLinkedin 
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const talents = [
  { 
    name: "Thai Bao", 
    skill: "Frontend Developer", 
    experience: "5 years", 
    details: { 
      location: "Ho Chi Minh", 
      company: "TechInnovate", 
      skills: ["React", "JavaScript", "CSS"],
      phone: "+84 123 456 789",
      email: "thai.bao@techinnovate.com",
      linkedin: "",
      skype: "thai.bao.skype"
    } 
  },
  { 
    name: "Tram Anh", 
    skill: "UI/UX Designer", 
    experience: "3 years", 
    details: { 
      location: "San Francisco", 
      company: "DesignWorks", 
      skills: ["Figma", "Adobe XD", "Sketch"],
      phone: "+1 650 123 4567",
      email: "tram.anh@designworks.com",
      linkedin: "",
      skype: "tram.anh.skype"
    } 
  },
  { 
    name: "Phuoc Hieu", 
    skill: "React Developer", 
    experience: "4 years", 
    details: { 
      location: "Global", 
      company: "CodeCraft", 
      skills: ["React", "Redux", "GraphQL"],
      phone: "+84 987 654 321",
      email: "phuoc.hieu@codecraft.com",
      linkedin: "",
      skype: "phuoc.hieu.skype"
    } 
  },
  { 
    name: "Son Tan", 
    skill: "Api", 
    experience: "6 years", 
    details: { 
      location: "Remote", 
      company: "CloudSphere", 
      skills: ["Python", "Django", "AWS"],
      phone: "+84 456 789 123",
      email: "son.tan@cloudsphere.com",
      linkedin: "",
      skype: "son.tan.skype"
    } 
  },
];

const TalentContactModal = ({ talent, onClose }) => {
  return (
    <div 
      className="modal show d-block" 
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div 
        className="modal-content" 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ 
          width: '400px', 
          backgroundColor: 'white', 
          borderRadius: '15px', 
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            background: 'none', 
            border: 'none', 
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div 
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#FFD700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              fontSize: '40px',
              fontWeight: 'bold'
            }}
          >
            {talent.name.charAt(0)}
          </div>
          <h2>{talent.name}</h2>
          <p style={{ color: 'gray' }}>{talent.skill} | {talent.experience}</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaPhone style={{ marginRight: '10px', color: '#FF9EAA' }} />
            <span>{talent.details.phone}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '10px', color: '#FF9EAA' }} />
            <span>{talent.details.email}</span>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '20px' 
        }}>
          <button 
            onClick={() => window.open(`https://zalo.me/${talent.details.phone}`)}
            style={{
              background: '#0068FF', 
              color: 'white', 
              border: 'none', 
              padding: '10px', 
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            Z
          </button>

          <button 
            onClick={() => window.open(`https://wa.me/${talent.details.phone}`)}
            style={{
              background: '#25D366', 
              color: 'white', 
              border: 'none', 
              padding: '10px', 
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <FaWhatsapp />
          </button>

          <button 
            onClick={() => window.open(`skype:${talent.details.skype}?chat`)}
            style={{
              background: '#00AFF0', 
              color: 'white', 
              border: 'none', 
              padding: '10px', 
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <FaSkype />
          </button>

          <button 
            onClick={() => window.open(talent.details.linkedin)}
            style={{
              background: '#0A66C2', 
              color: 'white', 
              border: 'none', 
              padding: '10px', 
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <FaLinkedin />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const FindTalent = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedTalent, setSelectedTalent] = useState(null);

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
                >
                  {/* Card Content */}
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
                      <small className="text-muted">Skills:</small>
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
                        onClick={() => setSelectedTalent(talent)}
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
      
      {selectedTalent && (
        <TalentContactModal 
          talent={selectedTalent} 
          onClose={() => setSelectedTalent(null)} 
        />
      )}
      
      <Footer/>
    </>
  );
};

export default FindTalent;  