import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const AddJobs = () => {
  return (
    <div>
      <Navbar />

      <div className="card mx-auto mt-3" style={{ width: "80%" }}>
        <div className="card-body p-5">
          <h3 className=" fw-bold">Post a Job</h3>
          <div className="mx-auto mt-5">
            <form>
              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputcompanyName"
                    className="form-label fw-bold"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter company name"
                    className="form-control jobs-post-form-input"
                    id="exampleInputcompanyName"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="exampleInputCompanyTitle"
                    className="form-label fw-bold"
                  >
                    Company Title
                  </label>
                  <input
                    type="text"
                    placeholder="enter company title"
                    className="form-control jobs-post-form-input"
                    id="exampleInputCompanyTitle"
                    required
                  />
                </div>
              </div>

              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputDate"
                    className="form-label fw-bold"
                  >
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    className="form-control jobs-post-form-input"
                    id="exampleInputDate"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="exampleInputEmployee"
                    className="form-label fw-bold"
                  >
                    Employee
                  </label>
                  <input
                    type="number"
                    placeholder="enter employee number"
                    className="form-control jobs-post-form-input"
                    id="exampleInputEmployee"
                    required
                  />
                </div>
              </div>

              <div className="input-group d-flex justify-content-around mb-4">
                <div>
                  <label
                    htmlFor="exampleInputJobTitle"
                    className="form-label fw-bold"
                  >
                    Job Title
                  </label>
                  <input
                    type="number"
                    placeholder="enter job title"
                    className="form-control jobs-post-form-input"
                    id="exampleInputJobTitle"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="exampleInputJobDetails"
                    className="form-label fw-bold"
                  >
                    Job Details
                  </label>
                  <textarea
                    className="form-control jobs-post-form-input"
                    id="exampleInputJobDetails"
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
                    value="Post"
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

export default AddJobs;
