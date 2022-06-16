import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import Navbar from "../../Shared/Navbar/Navbar";

const Applicants = () => {
  const [applicant, setApplicant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/applicants")
      .then((res) => res.json())
      .then((data) => {
        setApplicant(data);
        setLoading(false);
      });
  }, []);

  let contant;
  if (loading) {
    contant = <Loader />;
  } else {
    contant = (
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Position</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Experience</th>
                </tr>
              </thead>
              <tbody className="table-group-divider cus-desg">
                {applicant.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.fullName}</td>
                    <td className="text-center">{item.applyPosition}</td>
                    <td className="text-center">{item.email}</td>
                    <td className="text-center">{item.experience} Years</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {contant}
    </div>
  );
};

export default Applicants;
