import { AccountBalanceWallet, ChargingStation, CurrencyBitcoin, FingerprintOutlined, Payment, PointOfSale, Settings, SyncAlt } from "@mui/icons-material";
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Allservices() {
  return (
    <>
      <div className="">
        {/* <!-- ========================= sideBar ==================== --> */}
        <Sidebar />
        {/* <!-- ========================= Main ==================== --> */}
        <div className="main" style={{ background: "#f4f4f4" }}>
          {/* <!-- ========================= Navbar ==================== --> */}

          <Navbar />
          <div className="container ">
            <div className="row align-items-center m-5 bg-white">
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <FingerprintOutlined fontSize="large"/>
                    </div>
                    <div>AEPS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <CurrencyBitcoin fontSize="large"/>
                    </div>
                    <div>Bharat Bill Payment</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <SyncAlt fontSize="large"/>
                    </div>
                    <div>Money Transfer</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <PointOfSale fontSize="large"/>
                    </div>
                    <div>Payout</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <Settings fontSize="large"/>
                    </div>
                    <div>CMS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <Payment fontSize="large"/>
                    </div>
                    <div>Ndsl PAN Card</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <PointOfSale fontSize="large"/>
                    </div>
                    <div>Micro ATM</div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <AccountBalanceWallet fontSize="large"/>
                    </div>
                    <div>Wallet Transfer</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{height:"80px"}}>
                    <div>
                      <ChargingStation fontSize="large"/>
                    </div>
                    <div>Mobile Recharge</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5 fw-bold">
                    <div>
                      <AccountBalanceWallet fontSize="large"/>
                    </div>
                    <div>DTH Transfer</div>
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
