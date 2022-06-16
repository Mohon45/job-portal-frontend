import { Toast } from "bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Shared/Loader/Loader";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    loginUser(loginData.email, loginData.password);
  };

  return (
    <div>
      <div
        className="card register-box"
        style={{ width: "35rem", height: "80vh" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Login</h2>
          <div className="w-75 mx-auto mt-5">
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  Email id
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="enter your email id"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/* <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
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
                  onChange={handleOnChange}
                  placeholder="enter your password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <Link style={{ textDecoration: "none" }} to="/">
                New User? Please Register
              </Link>
              <div className="mb-3 text-center mt-5">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Login
                </button>
              </div>
            </form>
            {isLoading && <Loader />}
            {authError && toast.error("Something wrong!")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
