import React from "react";
import banner from "../Images/banner.png";
import weather from "../Images/Weather.png";
import heading from "../Images/heading.png";
import bar from "../Images/bar.png";
import orderstxt from "../Images/orderstxt.png";
import allPeriod from "../Images/allperiod.png";
import active from "../Images/active.png";
import menuLine from "../Images/menulines.png";
import dispute from "../Images/dispute.png";
import open from "../Images/open.png";
import close from "../Images/close.png";
import dropdown from "../Images/dropdown.png";
import dataicon from "../Images/dataicon.png";
import activecheck from "../Images/activecheck.png";
import pdf from "../Images/pdf.png";
import arrowRight from "../Images/arrowRight.png";
import { FooterComponent } from "../Components";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="dashboard__container">
        <div className="banner__weather-flex">
          <img className="banner" src={banner} alt="banner" />
          <img className="weather" src={weather} alt="weather" />
        </div>
        <div className="title__container">
          <p className="dashboard__txt">Hi 👋 Austin,</p>
          <p className="caption">here's your site overview</p>
        </div>
        <div className="order__statistics-container">
          <img src={heading} alt="heading" />
          <div className="card__container">
            <div className="card__contents">
              <img
                className="all__period-img"
                src={allPeriod}
                alt="all__period"
              />

              <img className="bars__img" src={bar} alt="bar" />
              <img className="orders__txt" src={orderstxt} alt="orders__txt" />
            </div>
          </div>
          <div className="statistics__container">
            <div className="active__content">
              <img className="menu__line" src={menuLine} alt="menu__line" />
              <img className="active" src={active} alt="active" />
              <p className="active__txt">Active</p>
              <p className="active__number">12,840</p>
            </div>

            <div className="dispute__content">
              <img className="menu__line" src={menuLine} alt="menu__line" />
              <img className="active" src={dispute} alt="dispute" />
              <p className="active__txt dispute__color">Dispute</p>
              <p className="active__number">31,830</p>
            </div>

            <div className="open__content">
              <img className="menu__line" src={menuLine} alt="menu__line" />
              <img className="active" src={open} alt="active" />
              <p className="active__txt open__color">Open</p>
              <p className="active__number">22,890</p>
            </div>

            <div className="cancel__content">
              <img className="menu__line" src={menuLine} alt="menu__line" />
              <img className="active" src={close} alt="active" />
              <p className="active__txt cancel__color">Cancel</p>
              <p className="active__number">1,360</p>
            </div>
          </div>
          <div className="subhead__container">
            <div className="order__heading">
              <p className="order__header">Order Status Summary</p>
              <div className="pagination">
                <p className="page__txt">For all period 0 - 04</p>
                <img src={dropdown} alt="drop__down" />
              </div>
            </div>
            <div className="table__header-contents">
              <img className="data__icon" src={dataicon} alt="data__icon" />
              <p className="date__and__id">Date and Id</p>
              <p className="product__details">Product Detail</p>
              <div className="status__with__dropdown">
                <p className="status__txt">Status</p>
                <img src={dropdown} alt="drop__down" />
              </div>
              <p className="pdf__txt">Contract PDF File</p>
              <p className="actions__txt">Actions</p>
            </div>
            <div className="table__contents">
              <div className="date__id__content">
                <p className="date">01.02.2022</p>
                <p className="id">ID 0001894</p>
              </div>
              <div className="product__detail__content">
                <p className="detail__txt">Cumin Seeds (Whole Jeera)</p>
                <p className="volume__txt">Volume: 70KG Price: INR 66</p>
              </div>
              <div className="status__content">
                <img
                  className="active__check"
                  src={activecheck}
                  alt="active__check"
                />
                <p className="active__txt-table">Active</p>
              </div>
              <div className="pdf__content">
                <img src={pdf} alt="pdf" />
                <p className="pdf__txt-download">Download PDF</p>
              </div>
              <div className="view__order-container">
                <p className="order__txt">VIEW ORDER</p>
                <img src={arrowRight} alt="arrow__right" />
              </div>
            </div>

            <div className="table__contents">
              <div className="date__id__content">
                <p className="date">01.02.2022</p>
                <p className="id">ID 0001894</p>
              </div>
              <div className="product__detail__content">
                <p className="detail__txt">Cumin Seeds (Whole Jeera)</p>
                <p className="volume__txt">Volume: 70KG Price: INR 66</p>
              </div>
              <div className="status__content">
                <img
                  className="active__check"
                  src={activecheck}
                  alt="active__check"
                />
                <p className="active__txt-table">Active</p>
              </div>
              <div className="pdf__content">
                <img src={pdf} alt="pdf" />
                <p className="pdf__txt-download">Download PDF</p>
              </div>
              <div className="view__order-container">
                <p className="order__txt">VIEW ORDER</p>
                <img src={arrowRight} alt="arrow__right" />
              </div>
            </div>

            <div className="table__contents">
              <div className="date__id__content">
                <p className="date">01.02.2022</p>
                <p className="id">ID 0001894</p>
              </div>
              <div className="product__detail__content">
                <p className="detail__txt">Cumin Seeds (Whole Jeera)</p>
                <p className="volume__txt">Volume: 70KG Price: INR 66</p>
              </div>
              <div className="status__content">
                <img
                  className="active__check"
                  src={activecheck}
                  alt="active__check"
                />
                <p className="active__txt-table">Active</p>
              </div>
              <div className="pdf__content">
                <img src={pdf} alt="pdf" />
                <p className="pdf__txt-download">Download PDF</p>
              </div>
              <div className="view__order-container">
                <p className="order__txt">VIEW ORDER</p>
                <img src={arrowRight} alt="arrow__right" />
              </div>
            </div>
          </div>
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default Body;
