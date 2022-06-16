import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Jobs = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="mt-5">
          <h2 style={{ fontSize: "3rem" }}>Jobs For You</h2>
        </div>
        <div className="card custom-card mt-3">
          <div className="card-body p-5">
            <div>
              <h2 className="fw-bold">Company Name</h2>
              <h4>Comapany Title </h4>
              <p>1-10 EMPLOYEES</p>
            </div>
            <div className="card mt-5" style={{ boxShadow: "none" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Frontend Engineer</h4>
                  <div className="d-flex align-items-center">
                    <p className="me-4">Deadline: 11/11/2022</p>
                    <div>
                      <Link
                        className="job-btn"
                        to="/dashboard/jobs/details/:id"
                      >
                        View
                      </Link>
                      <Link
                        className="job-btn ms-4"
                        to="/dashboard/jobs/apply/:id"
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
        <div className="card custom-card mt-3">
          <div className="card-body p-5">
            <div>
              <h2 className="fw-bold">Company Name</h2>
              <h4>Comapany Title </h4>
              <p>1-10 EMPLOYEES</p>
            </div>
            <div className="card mt-5" style={{ boxShadow: "none" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Frontend Engineer</h4>
                  <div className="d-flex align-items-center">
                    <p className="me-4">Deadline: 11/11/2022</p>
                    <div>
                      <Link className="job-btn" to="/">
                        View
                      </Link>
                      <Link className="job-btn ms-4" to="/">
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
