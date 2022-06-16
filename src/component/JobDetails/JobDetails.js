import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const JobDetails = () => {
  const [jobs, setJobs] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const { companyName, employee, jobDetails, jobTitle } = jobs;

  let contant;
  if (loading) {
    contant = <Loader />;
  } else {
    contant = (
      <div className="card container mt-4">
        <div className="card-body p-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold">{jobTitle}</h2>
              <h4>{companyName}</h4>
              <p>{employee} Employee</p>
            </div>
            <div>
              <Link
                className="job-btn px-5"
                to={`/dashboard/jobs/apply/${jobs._id}`}
              >
                Apply
              </Link>
            </div>
          </div>
          <div className="job-desc-section">
            <h4 className="fw-bold">About the job</h4>

            <p>{jobDetails}</p>
          </div>
        </div>
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

export default JobDetails;
