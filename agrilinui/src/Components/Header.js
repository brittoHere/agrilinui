import React, { useState } from "react";
import edit from "../Images/edit.png";
import mail from "../Images/mail.png";
import profile from "../Images/profile.png";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import CloseIcon from "@mui/icons-material/Close";
import arrow from "../Images/arrow.png";
import "./Header.css";

const Header = () => {
  const [drawer, setDrawer] = useState(true);

  const [close, setClose] = useState(false);

  const handleDrawer = () => {
    setDrawer(false);
    setClose(true);
  };

  const handleClose = () => {
    setDrawer(true);
    setClose(false);
  };
  return (
    <>
      <div className="header__container">
        <div className="bars">
          <p className="bar__icon" onClick={() => handleDrawer()}>
            {drawer && <HorizontalSplitIcon />}
          </p>
          <p className="bar__icon" onClick={() => handleClose()}>
            {close && <CloseIcon />}
          </p>
        </div>
        <div className="header__flex">
          <div className="button__container">
            <img className="edit__icon" src={edit} alt="edit__icon" />
            <p className="button__txt">Talk to our sales team</p>
          </div>
          <div className="email__icon">
            <img src={mail} alt="mail" />
          </div>
          <div className="profile__container">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
      {close && (
        <>
          <div className="drawer__contents inactive">
            <div className="block__header">
              <div className="edit__btn">
                <img className="edit__icon" src={edit} alt="edit__icon" />
                <p className="button__txt">Talk to our sales team</p>
              </div>
              <img src={mail} alt="mail" />
              <div style={{ marginTop: "2%" }}>
                <img src={profile} alt="profile" />
              </div>
            </div>

            <div className="menu__head-container menu__heading">
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
        </>
      )}
    </>
  );
};

export default Header;
