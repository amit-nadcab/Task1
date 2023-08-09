import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  AccountBalanceOutlined,
  AccountBalanceWallet,
  AccountCircleRounded,
  DashboardCustomize,
  FingerprintOutlined,
  List,
  PhoneAndroid,
  Settings,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/slice/user";

export default function Sidebar() {

  const { userProfile } = useSelector((state) => state.data.value);
  const dispatch = useDispatch();


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

  useEffect(() => {
    getUserProfile(dispatch);
  }, []);


  return (
    <>
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
              <span className="fw-bold">{userProfile?.user_name}</span>
              <p>{userProfile?.user_type} | {userProfile?.user_code}</p>
            </div>
          </span>

          <li>
            <NavLink to="/dashboard">
              <span className="icon">
                <DashboardCustomize />
              </span>
              <span className="title">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <span className="icon">
                <AccountCircleRounded />
              </span>
              <span className="title">Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/BEPS">
              <span className="icon">
                <PhoneAndroid />
              </span>
              <span className="title">BEPS</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/AEPS">
              <span className="icon">
                <FingerprintOutlined />
              </span>
              <span className="title">AEPS</span>
            </NavLink>
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
                <Settings />
              </span>
              <span className="title">Account Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
