import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="card container mt-4">
        <div className="card-body p-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold">Job Title</h2>
              <h4>Company Name</h4>
              <p>Employee</p>
            </div>
            <div>
              <Link className="job-btn px-5" to="/">
                Apply
              </Link>
            </div>
          </div>
          <div className="job-desc-section">
            <h4 className="fw-bold">About the job</h4>

            <p>
              Swifteam helps you manage the remote team's onboarding/offboarding
              and device purchasing, financing, approvals, storage, logistics,
              and management. We're looking for people with a strong background
              or interest in building successful products or systems; you're
              comfortable in dealing with lots of moving pieces; you have
              exquisite attention to detail, and you're comfortable learning new
              technologies. Software engineering and innovation are at the core
              of our team. As a Frontend Engineer, you will build the core of
              products in a spectacularly robust fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
