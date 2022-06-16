import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Shared/Navbar/Navbar";

const AddJobs = () => {
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

    fetch("https://blooming-fortress-96049.herokuapp.com/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Job Post Successfull!");
        navigate("/dashboard/jobs");
        event.target.reset();
      });
  };

  return (
    <div>
      <Navbar />

      <div className="card mx-auto mt-3" style={{ width: "80%" }}>
        <div className="card-body p-5">
          <h3 className=" fw-bold">Post a Job</h3>
          <div className="mx-auto mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("companyName")}
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
                    {...register("companyTitle")}
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
                    {...register("deadline")}
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
                    {...register("employee")}
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
                    type="text"
                    {...register("jobTitle")}
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
                    {...register("jobDetails")}
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
