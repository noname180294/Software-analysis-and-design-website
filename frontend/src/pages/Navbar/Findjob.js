import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const jobs = [
  { title: "Frontend Developer", type: "Full-time", salary: "$4000/month" },
  { title: "UI/UX Designer", type: "Part-time", salary: "$2000/month" },
  { title: "React Developer", type: "Freelance", salary: "$30/hour" },
  { title: "Backend Developer", type: "Full-time", salary: "$4500/month" },
  { title: "Data Scientist", type: "Part-time", salary: "$3500/month" },
  { title: "Project Manager", type: "Full-time", salary: "$5000/month" },
  { title: "Marketing Specialist", type: "Freelance", salary: "$40/hour" },
  { title: "DevOps Engineer", type: "Full-time", salary: "$5500/month" },
  { title: "Cybersecurity Analyst", type: "Part-time", salary: "$4000/month" },
  { title: "Product Designer", type: "Freelance", salary: "$35/hour" }
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
    <div className="container py-5">
      <button className="btn btn-secondary mb-3" onClick={() => window.location.href = "/"}>Back</button>
      <h1 className="text-center mb-4">Find Your Dream Job ✨</h1>
      
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
      </div>
      
      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-md-6 mb-3"
            >
              <div className="card p-3 shadow-sm">
                <h2 className="h5">{job.title}</h2>
                <p className="text-muted">{job.type} • {job.salary}</p>
                <button className="btn btn-primary" onClick={() => handleApply(job)}>Apply Now</button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-muted">No jobs found.</p>
        )}
      </div>

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
              <input className="form-control my-2" type="file" accept="image/jpeg, image/png" onChange={(e) => validatePhoto(e.target.files[0])} placeholder="Upload Passport-Sized Photo" />
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
  );
};

export default FindJob;
