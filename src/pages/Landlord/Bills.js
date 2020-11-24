import React from "react";
import { Link } from "react-router-dom";

// import { FaWindowClose } from "react-icons/fa";

import Footer from "../../components/static/Footer";
import Payables from "../../components/PayablesList";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function Bills() {
  const data = [
    {
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
    { text: "Maintenance", icon: "/imgs/settings.svg", url: "" },
    { text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Bills" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight ">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 align-self-center mt-4">
              {data.map((item, index) => {
                return (
                  <Link key={index} to="/" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src={item.icon} alt={item.text} width="24px" />
                    <br />
                    <span>{item.text} </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
