import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";
import { toast } from "react-toastify";

const ApplyJob = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();

    fetch("https://blooming-fortress-96049.herokuapp.com/applicants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Application Successfull!");
        navigate("/dashboard/jobs");
        event.target.reset();
      });
  };

  return (
    <div>
      <Navbar />

      <div className="card mx-auto mt-3" style={{ width: "80%" }}>
        <div className="card-body p-5">
          <h3 className=" fw-bold">Apply</h3>
          <div className="mx-auto mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("fullName")}
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
                    {...register("email")}
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
                    {...register("experience")}
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
                    {...register("applyPosition")}
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
                    {...register("resume")}
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
                    {...register("coverLetter")}
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
