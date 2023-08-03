import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FingerprintOutlined } from "@mui/icons-material";
export default function Aeps() {
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
            <div className="row ">
              <div className="col-md-8 offset-md-2">
                <div className="bg-white">
                  <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                    <p className="m-0">AADHAR-ENABLED PAYMENT SYSTEM</p>
                  </div>

                  <div className="p-3 pb-4">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Txn Type <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select form-select-sm mb-3"
                          aria-label="Txn Type"
                        >
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Bank Name <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select form-select-sm mb-3"
                          aria-label="Bank Name"
                        >
                          <option selected>--Select--</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Aadhar Number <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="Number"
                          placeholder="Enter 12 Digit Aadhar Number"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Mobile Number <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="Number"
                          placeholder="Enter 10 Digit Mobile Number"
                          aria-label="default input example"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Device Type <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select form-select-sm mb-3"
                          aria-label="Txn Type"
                        >
                          <option selected>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Biometric <span className="text-danger">*</span>
                        </label>
                        <div>
                          <FingerprintOutlined size="300px" />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <label className="mb-1 form-label">
                          Withdrawal Amount{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control form-control-sm"
                          type="Number"
                          placeholder="Withdrawal Amount"
                          aria-label="default input example"
                        />
                      </div>
                    </div>
                    <div className="ms-5 pt-3">
                      <div className="form-check form-control-sm">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I/Customer hereby accepts and confirm all the terms &
                          conditions under best of my knowledge.
                        </label>
                      </div>
                      <div className="form-check form-control-sm">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I/Retailer hereby accepts and confirm all the terms &
                          conditions under best of my knowledge.
                        </label>
                      </div>
                      <p className="fs-14 fw-bold">
                        Note: You're not allowed to do more than 5 transactions
                        of each transaction mode for same Aadhaar
                      </p>
                      <button className="btn bg-blue-any text-white fs-14">
                        CAPTURE FINGERPRINT
                      </button>
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
