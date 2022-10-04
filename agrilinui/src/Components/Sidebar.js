import React from "react";
import logo from "../Images/logo.png";
import arrow from "../Images/arrow.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__bg">
        <div className="brand__name-separator">
          <div className="brand__name-container">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>

        <div className="separator" />
        <div className="sidebar__contents">
          <div className="menu__head-container">
            <h2 className="menu__head">Main Menu</h2>
          </div>
          <div className="main__menu-contents">
            <ul>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-solid fa-gauge icon__style"></i>
                  <span className="txt__only">Dashboard</span>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-solid fa-shop icon__style"></i>
                  <span className="txt__only">Market Place</span>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-brands fa-jedi-order icon__style"></i>
                  <span className="txt__only">My Orders</span>
                </span>
                <span>
                  <i className="fa-solid fa-caret-down drop__down"></i>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-solid fa-table icon__style"></i>
                  <span className="txt__only">Create Table</span>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-regular fa-user icon__style"></i>
                  <span className="txt__only">Profile</span>
                </span>
              </li>
            </ul>
            <div className="menu__head-container">
              <h2 className="menu__head">
                Additional{" "}
                <span>
                  {" "}
                  <i className="fa-solid fa-caret-down drop__down"></i>
                </span>
              </h2>
            </div>

            <ul>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-regular fa-bell icon__style"></i>
                  <span className="txt__only">Notification</span>
                  <span className="txt__only number">218</span>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-solid fa-gear icon__style"></i>
                  <span className="txt__only">Settings</span>
                </span>
              </li>
              <li className="rectangle__bg">
                <span className="icon__txt">
                  <i className="fa-solid fa-phone icon__style"></i>
                  <span className="txt__only">Call Support</span>
                </span>
              </li>
            </ul>
            <div className="sidebar__footer">
              <p className="upgrade__txt">Upgrade your plan</p>
              <p className="pro__txt">
                Go to <span className="pro">PRO</span>
                <div className="arrow__border">
                  <img className="align__arrow" src={arrow} alt="arrow" />
                </div>
              </p>
            </div>
            <p style={{ marginTop: "5%", color: "#fff" }}>""</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
