import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Authentication/Login/Login";
import Register from "../component/Authentication/Register/Register";
import Home from "../component/Home/Home";
import "../Assets/style.css";
import Notify from "../Shared/Notify/Notify";
import Jobs from "../component/Jobs/Jobs";
import AddJobs from "../component/AddJobs/AddJobs";
import JobDetails from "../component/JobDetails/JobDetails";
import ApplyJob from "../component/ApplyJob/ApplyJob";
import Applicants from "../component/Applicants/Applicants";
import AuthProvider from "../contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/jobs" element={<Jobs />} />
          <Route path="/dashboard/post-jobs" element={<AddJobs />} />
          <Route path="/dashboard/jobs/details/:id" element={<JobDetails />} />
          <Route path="/dashboard/jobs/apply/:id" element={<ApplyJob />} />
          <Route path="/dashboard/jobs/applicants" element={<Applicants />} />
        </Routes>
        <Notify />
      </AuthProvider>
    </div>
  );
}

export default App;
