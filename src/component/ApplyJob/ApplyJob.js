import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const ApplyJob = () => {
  return (
    <div>
      <Navbar />

      <div className="card mx-auto mt-3" style={{ width: "80%" }}>
        <div className="card-body p-5">
          <h3 className=" fw-bold">Apply</h3>
          <div className="mx-auto mt-5">
            <form>
              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputFullName"
                    className="form-label fw-bold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter your full name"
                    className="form-control jobs-post-form-input"
                    id="exampleInputFullName"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="exampleInputEmail"
                    className="form-label fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="form-control jobs-post-form-input"
                    id="exampleInputEmail"
                    required
                  />
                </div>
              </div>

              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputexperiment"
                    className="form-label fw-bold"
                  >
                    Working Experience
                  </label>
                  <input
                    type="text"
                    placeholder="in years"
                    className="form-control jobs-post-form-input"
                    id="exampleInputexperiment"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleInputEmployee"
                    className="form-label fw-bold"
                  >
                    Which Position do you Apply for?
                  </label>
                  <input
                    type="text"
                    placeholder="enter a position"
                    className="form-control jobs-post-form-input"
                    id="exampleInputEmployee"
                    required
                  />
                </div>
              </div>

              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputresume"
                    className="form-label fw-bold"
                  >
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="form-control jobs-post-form-input"
                    id="exampleInputresume"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="exampleInputCoverLetter"
                    className="form-label fw-bold"
                  >
                    Write Cover Letter
                  </label>
                  <textarea
                    className="form-control jobs-post-form-input"
                    id="exampleInputCoverLetter"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="d-flex justify-content-end mt-5">
                <div className="" style={{ width: "25rem" }}>
                  <Link to="/dashboard/jobs">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg px-5"
                    >
                      Cancel
                    </button>
                  </Link>
                  <input
                    type="submit"
                    value="Apply"
                    className="btn btn-primary btn-lg px-5 ms-5"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
