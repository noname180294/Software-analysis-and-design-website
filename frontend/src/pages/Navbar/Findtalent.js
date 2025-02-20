import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const talents = [
  { name: "Thai Bao", skill: "Frontend Developer", experience: "5 years" },
  { name: "Tram Anh", skill: "UI/UX Designer", experience: "3 years" },
  { name: "Phuoc Hieu", skill: "React Developer", experience: "4 years" },
  { name: "Son Tan", skill: "Backend Developer", experience: "6 years" },
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
    <div className="container py-5">
      <h1 className="text-center mb-4">Find the Best Talent 💼</h1>
      
      <div className="row mb-4">
        <div className="col-md-8">
          <input
            className="form-control"
            placeholder="Search talent..."
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
            <div key={index} className="col-md-6 mb-3">
              <div className="card p-3 shadow-sm">
                <h2 className="h5">{talent.name}</h2>
                <p className="text-muted">{talent.skill} • {talent.experience}</p>
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No talent found.</p>
        )}
      </div>
    </div>
  );
};

export default FindTalent;