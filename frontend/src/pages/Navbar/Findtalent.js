import React, { useState } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const talents = [
  { name: "Thai Bao", skill: "Frontend Developer", experience: "5 years" },
  { name: "Tram Anh", skill: "UI/UX Designer", experience: "3 years" },
  { name: "Phuoc Hieu", skill: "React Developer", experience: "4 years" },
  { name: "Son Tan", skill: "Backend Developer", experience: "6 years" },
];

const FindTalent = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredTalents = talents.filter(
    (talent) =>
      (filter === "All" || talent.skill === filter) &&
      talent.name.toLowerCase().includes(search.toLowerCase())
  );

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-vh-100 py-5 container">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <h1 className="display-4 text-white fw-bold m-0">
                Find the Best Talent
              </h1>
              <div className="bg-black p-3 rounded-circle">
                <PiSuitcaseSimple className="text-warning" style={{ fontSize: '2.5rem' }} />
              </div>
            </div>
            <p className="text-light lead w-75 mx-auto">
              Discover top professionals ready to bring their expertise to your projects
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <div className="card text-white p-4 shadow" style={{backgroundColor: '#FFD0D0'}}>
                <div className="row g-3">
                  <div className="col-md-8">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search talent by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <select
                      className="form-select"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="All">All Skills</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="React Developer">React Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Talents Grid */}
          <div className="row g-4">
            {filteredTalents.length > 0 ? (
              filteredTalents.map((talent, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div
                    className="card h-100 border-0 shadow-sm text-white"
                    style={{
                      transform: hoveredIndex === index ? "translateY(-5px)" : "none",
                      transition: "transform 0.3s ease",
                      backgroundColor: '#111111',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
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
                        <div className="ms-3">
                          <h2 className="h5 mb-0">{talent.name}</h2>
                          <p className="text-light small mb-0">
                            {talent.skill} • {talent.experience}
                          </p>
                        </div>
                      </div>
                      <button
                        className="btn w-100 mb-3"
                        style={{ 
                          backgroundColor: isHovered ? "#FF9EAA" : "#FFD0D0",
                          color: "#000000",
                          border: "none",
                          fontWeight: "500",
                          transition: "all 0.3s ease"
                        }}
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No talent found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindTalent;
