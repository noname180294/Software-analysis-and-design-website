import React from 'react';
import { FaReact, FaPython, FaAws, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiBlockchaindotcom } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { DiApple, DiLinux } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import './styles/popularJobs.css';

const PopularJobs = () => {
  const jobs = [
    { icon: <FaReact size={24} />, name: "React Developer" },
    { icon: <FaPython size={24} />, name: "Python Engineer" },
    { icon: <SiTensorflow size={24} />, name: "AI Specialist" },
    { icon: <FaAws size={24} />, name: "Cloud Engineer" },
    { icon: <FaDatabase size={24} />, name: "Database Admin" },
    { icon: <AiFillAndroid size={24} />, name: "Mobile Developer" },
    { icon: <SiBlockchaindotcom size={24} />, name: "Blockchain Dev" },
    { icon: <BsCodeSlash size={24} />, name: "Full Stack Dev" },
    { icon: <MdAnalytics size={24} />, name: "Data Analyst" },
    { icon: <DiApple size={24} />, name: "IOS Developer" },
    { icon: <GiArtificialIntelligence size={24} />, name: "AI Engineer" },
    { icon: <DiLinux size={24} />, name: "Linux Engineer" },
  ];

  return (
    <div className="popular-jobs-section py-5" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="text-white fw-bold">Popular IT Jobs</h2>
          </div>
        </div>
        
        <div className="row g-4">
          {jobs.map((job, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div className="job-card h-100">
                <div className="card bg-dark text-white border-0">
                  <div className="card-body d-flex align-items-center">
                    <div className="icon-wrapper me-3 text-info">
                      {job.icon}
                    </div>
                    <h5 className="card-title mb-0">{job.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularJobs;