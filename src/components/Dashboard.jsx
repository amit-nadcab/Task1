import React from "react";
import { useEffect } from "react";
import "../css/dashboard.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {
  AccountBalanceOutlined,
  AccountBalanceWallet,
  AccountCircleRounded,
  DashboardCustomize,
  FingerprintOutlined,
  List,
  PhoneAndroid,
} from "@mui/icons-material";

export default function Dashboard() {
  useEffect(() => {
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    // Menu Toggle
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function () {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };
  }, []);
  return (
    <>
      <div className="">
        <div className="navigation">
          <ul>
            <li>
              <Link href="#">
                {/* <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span> */}
                <span className="title">
                  <img width={150} src="/images/Any_pe_logo.png" alt="logo" />
                </span>
              </Link>
            </li>

            <span className="d-flex justify-content-center">
              <div className="text-center">
                <span>Golu Meena</span>
                <p>Silver Partner | RT343817</p>
              </div>
            </span>

            <li>
              <Link to="/dashboard">
                <span className="icon">
                  <DashboardCustomize />
                </span>
                <span className="title">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <AccountCircleRounded />
                </span>
                <span className="title">Profile</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <PhoneAndroid />
                </span>
                <span className="title">BEPS</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <FingerprintOutlined />
                </span>
                <span className="title">AEPS</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <AccountBalanceOutlined />
                </span>
                <span className="title">Payout</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <AccountBalanceOutlined />
                </span>
                <span className="title">DMT</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <span className="icon">
                  <AccountBalanceWallet />
                </span>
                <span className="title">Wallet</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon">
                  <List />
                </span>
                <span className="title">Report</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Account Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- ========================= Main ==================== --> */}
        <div className="main">
          <Navbar />

          {/* <!-- ======================= Cards ================== --> */}
          <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">1,504</div>
                <div className="cardName">Daily Views</div>
              </div>

              <div className="iconBx">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">80</div>
                <div className="cardName">Sales</div>
              </div>

              <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">284</div>
                <div className="cardName">Comments</div>
              </div>

              <div className="iconBx">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">$7,842</div>
                <div className="cardName">Earning</div>
              </div>

              <div className="iconBx">
                <ion-icon name="cash-outline"></ion-icon>
              </div>
            </div>
          </div>

          {/* <!-- ================ Order Details List ================= --> */}
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
                <Link href="#" className="btn">
                  View All
                </Link>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                      <span className="status return">Return</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td>
                      <span className="status inProgress">In Progress</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                      <span className="status return">Return</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td>
                      <span className="status inProgress">In Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- ================= New Customers ================ --> */}
            <div className="recentCustomers">
              <div className="cardHeader">
                <h2>Recent Customers</h2>
              </div>

              <table>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer02.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br /> <span>Italy</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer01.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Amit <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer02.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br /> <span>Italy</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer01.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Amit <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer02.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br /> <span>Italy</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer01.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Amit <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer01.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David <br /> <span>Italy</span>
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="assets/imgs/customer02.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      Amit <br /> <span>India</span>
                    </h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
