import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Beps() {
  return (
    <>
      <div className="">
        {/* <!-- ========================= sideBar ==================== --> */}
        <Sidebar />
        {/* <!-- ========================= Main ==================== --> */}
        <div className="main" style={{ background: "#f4f4f4" }}>
          {/* <!-- ========================= Navbar ==================== --> */}

          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row ">
                  <div className="col-md-4 col-sm-12">
                    <div className="bg-white">
                      <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                        <p className="m-0">Bill Payment</p>
                      </div>
                      <div className="p-3 pb-4">
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Category <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Datacard Prepaid"
                            aria-label="Datacard Prepaid"
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Operator Name <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Jio Fi"
                            aria-label="Jio Fi"
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Mobile Number <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control form-control-sm"
                            type="Number"
                            placeholder="Enter 10 Digit Mobile Number"
                            aria-label="Enter 10 Digit Mobile Number"
                          />
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Mode <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select form-select-sm "
                            aria-label="Bank Name"
                          >
                            <option selected>online</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="pb-2">
                          <label className="mb-1 form-label">
                            Amount <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control form-control-sm"
                            type="Number"
                            placeholder="Amount"
                            aria-label="Amount"
                          />
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <button className="btn bg-blue-any text-white fs-14 w-100">
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <div className="bg-white">
                      <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                        <p className="m-0">Bill Details</p>
                      </div>
                      <div className="p-3 pb-4">
                        <p className="fs-14">
                          Disclaimer: While we support most Billing Payments, we
                          request you to verify with your operator once before
                          proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
