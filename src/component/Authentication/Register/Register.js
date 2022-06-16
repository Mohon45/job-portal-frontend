import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="card register-box"
        style={{ width: "35rem", height: "80vh" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Register</h2>
          <div className="w-75 mx-auto mt-5">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputuser"
                  className="form-label fw-bold"
                >
                  User Type
                </label>
                <select className="form-select">
                  <option selected>Select a User Type</option>
                  <option value="1">Company</option>
                  <option value="2">Applicant</option>
                </select>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputname"
                  className="form-label fw-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="text"
                  placeholder="enter your name"
                  className="form-control"
                  id="exampleInputname"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputemail"
                  className="form-label fw-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="form-control"
                  id="exampleInputemail"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label fw-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <Link style={{ textDecoration: "none" }} to="/login">
                Already Registered? Please Login
              </Link>
              <div className="mb-3 text-center mt-5">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Register
                </button>
              </div>
            </form>
            {/* {isLoading && <Loader />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
