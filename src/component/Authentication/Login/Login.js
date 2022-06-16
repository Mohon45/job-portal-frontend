import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div
        className="card register-box"
        style={{ width: "35rem", height: "80vh" }}
      >
        <div className="card-body">
          <h2 className="text-center fw-bold">Login</h2>
          <div className="w-75 mx-auto mt-5">
            <form>
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
                  placeholder="enter your password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <Link style={{ textDecoration: "none" }} to="/login">
                New User? Please Register
              </Link>
              <div className="mb-3 text-center mt-5">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
