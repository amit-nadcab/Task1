import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/profile.css";
import user, { getUserProfile } from "../redux/slice/user";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { userProfile } = useSelector((state) => state.data.value);

  console.log(userProfile, "userProfile");

  const dispatch = useDispatch();

  useState(() => {
    getUserProfile(dispatch);
  }, []);
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
              <div className="profile">
                <div className="bg-blue-any text-white p-2 ps-3 mt-3  fs-6">
                  <h6>User Profile</h6>
                </div>

                <ul>
                  <li>User Id: {userProfile?.user_id}</li>
                  <li>User Code: {userProfile?.user_code}</li>
                  <li>Email Id: {userProfile?.user_email}</li>
                  <li>Name: {userProfile?.user_name}</li>
                  <li>Father's Name: ------</li>
                  <li>Mobile Primary: {userProfile?.user_number_primary}</li>
                  <li>Mobile Secondry: {userProfile?.user_number_secondry}</li>
                  <li>Firm Name: {userProfile?.user_firm_name}</li>
                  <li>Date of Birth: {userProfile?.user_dob}</li>
                  <li>Gender: {userProfile?.user_gender}</li>
                  <li>Aadhar No: {userProfile?.user_document?.aadhaar_card_number}</li>
                  <li>PAN No: {userProfile?.user_document?.pan_card_number}</li>
                  <li>Address: {userProfile?.user_address?.address_1}</li>
                  <li>City: ------------</li>
                  <li>State: --------</li>
                  <li>Pincode: {userProfile?.user_address?.pincode}</li>
                </ul>
              </div>
              {/* <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <FingerprintOutlined fontSize="large" />
                    </div>
                    <div>AEPS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <CurrencyBitcoin fontSize="large" />
                    </div>
                    <div>Bharat Bill Payment</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <SyncAlt fontSize="large" />
                    </div>
                    <div>Money Transfer</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <PointOfSale fontSize="large" />
                    </div>
                    <div>Payout</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <Settings fontSize="large" />
                    </div>
                    <div>CMS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <Payment fontSize="large" />
                    </div>
                    <div>Ndsl PAN Card</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <PointOfSale fontSize="large" />
                    </div>
                    <div>Micro ATM</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <AccountBalanceWallet fontSize="large" />
                    </div>
                    <div>Wallet Transfer</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5  fw-bold" style={{ height: "80px" }}>
                    <div>
                      <ChargingStation fontSize="large" />
                    </div>
                    <div>Mobile Recharge</div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="bg-blue-any text-white m-3 p-4 rounded-5 d-flex justify-content-center text-center">
                  <div className="fs-5 fw-bold">
                    <div>
                      <AccountBalanceWallet fontSize="large" />
                    </div>
                    <div>DTH Transfer</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
