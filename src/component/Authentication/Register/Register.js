import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Shared/Loader/Loader";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    registerUser(
      registerData.userType,
      registerData.email,
      registerData.password,
      registerData.name
    );
  };
  return (
    <div>
      {!isLoading && (
        <div
          className="card register-box"
          style={{ width: "35rem", height: "80vh" }}
        >
          <div className="card-body">
            <h2 className="text-center fw-bold">Register</h2>
            <div className="w-75 mx-auto mt-5">
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputuser"
                    className="form-label fw-bold"
                  >
                    User Type
                  </label>
                  <select
                    className="form-select"
                    name="userType"
                    onBlur={handleOnBlur}
                    required
                  >
                    <option selected>Select a User Type</option>
                    <option value="company">Company</option>
                    <option value="user">Applicant</option>
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
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder="enter your name"
                    className="form-control"
                    id="exampleInputname"
                    required
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
                    onBlur={handleOnBlur}
                    placeholder="enter your email"
                    className="form-control"
                    id="exampleInputemail"
                    aria-describedby="emailHelp"
                    required
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
                    onBlur={handleOnBlur}
                    placeholder="enter your password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
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
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
      {authError && toast.error("Some Problem! Try Again")}
    </div>
  );
};

export default Register;
