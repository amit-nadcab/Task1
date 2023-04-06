import React from "react";
import { useEffect } from "react";
import "../css/dashboard.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
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
            <div className="text-center m-3 fw-bold fs-5">
              <p>
                Instant Money Transfer to 400+ banks in India | Cash Deposit
                Available 24 x 7
              </p>
              <div>
                <img
                  style={{ width: "60%" }}
                  src="https://anype.info/Content/img/moneytransfer.png"
                ></img>
              </div>
            </div>
            <div className="row align-items-center  m-0">
              <div className="col-md-4 col-sm-12">
                <div className="card m-3">
                  <div className="text-center bg-blue-any text-white p-1 rounded">Quick Link</div>
                  <div className=" rounded p-2 ps-4 max-height-overflow-300px">
                  <p>Fraud Advisory</p>
                  <p>CSP Business Profile</p>
                  <p>Download Yes Bank BC 1 - CARD</p>
                  <p>Download Yes Bank Certificate</p>
                  <p>Click to Update GST</p>
                  <p>Business Correspondent</p>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-4 col-sm-12 ">
                <div className="rounded-5 bg-blue-any p-3 text-center text-white fw-bold pointer">
                  <div>Click Hear</div>
                  <div className="fs-5">For All Services</div>

                </div>
              </div>
              <div className="col-md-4 col-sm-12">
              <div className="card m-3">
                  <div className="text-center bg-blue-any text-white p-1 rounded">Bulletin Board</div>
                  <div className=" rounded p-2 ps-4 max-height-overflow-300px">
                  <p>We are pleased to inform you all that our helpdesk number "01244154700" is now available from 9 AM to 9 PM on all days of the week.</p>
                  <p className="text-danger fw-bold p-0 m-0">NEW</p>
                  <p>सभी सर्विस और प्रोसेस वीडियो देखने के लिए, कृपया "Training" टैब पर क्लिक करे |</p>
                  <p className="text-danger fw-bold p-0 m-0">NEW</p>
                  <p>Click to Update GST</p>
                  <p>Please click on the "Training" Tab to check all the service and process videos.</p>
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
