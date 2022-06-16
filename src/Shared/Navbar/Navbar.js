import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, company, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-color">
        <div className="container d-flex justify-content-between py-2">
          <div>
            <Link className="navbar-brand" to="/dashboard">
              Job Portal
            </Link>
          </div>
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/jobs">
                  Jobs
                </Link>
              </li>
              {company && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/post-jobs">
                      Post Jobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/jobs/applicants">
                      Applicants
                    </Link>
                  </li>
                </>
              )}

              {user.email ? (
                <li className="nav-item">
                  <button
                    onClick={logout}
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    LogOut
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
