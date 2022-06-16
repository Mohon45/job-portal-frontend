import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import Navbar from "../../Shared/Navbar/Navbar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  let contant;
  if (loading) {
    contant = <Loader />;
  } else {
    contant = (
      <div className="container">
        <div className="mt-5">
          <h2 style={{ fontSize: "3rem" }}>Jobs For You</h2>
        </div>
        {jobs.map((job, index) => (
          <div className="card custom-card mt-3" key={index}>
            <div className="card-body p-5">
              <div>
                <h2 className="fw-bold">{job.companyName}</h2>
                <h4>{job.companyTitle}</h4>
                <p>{job.employee} EMPLOYEES</p>
              </div>
              <div className="card mt-5" style={{ boxShadow: "none" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>{job.jobTitle}</h4>
                    <div className="d-flex align-items-center">
                      <p className="me-4">Deadline: {job.deadline}</p>
                      <div>
                        <Link
                          className="job-btn"
                          to={`/dashboard/jobs/details/${job._id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="job-btn ms-4"
                          to={`/dashboard/jobs/apply/${job._id}`}
                        >
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      {contant}
    </div>
  );
};

export default Jobs;
