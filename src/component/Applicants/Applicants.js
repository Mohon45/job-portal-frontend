import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

const Applicants = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Address</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody class="table-group-divider cus-desg">
                <tr>
                  <td className="text-center">ss</td>
                  <td className="text-center">ss</td>
                  <td className="text-center">ss</td>
                  <td className="text-center">ss</td>
                  <td className="text-center">ss</td>
                  <td className="text-center">
                    <button
                      // onClick={() => onDeleteHandler(product?._id)}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
