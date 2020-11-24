import React from "react";
import { Link } from "react-router-dom";
// import { FaWindowClose } from "react-icons/fa";

import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function PropertyInfo() {
  const data = [
    {
      text: "Tenancy",
      icon: "/imgs/family.svg",
      url: "",
    },
    { text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { text: "Building", icon: "/imgs/company.svg", url: "" },
    { text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { text: "Service Charge", icon: "/imgs/money-bag.svg", url: "" },
    { text: "Rate & Taxes", icon: "/imgs/pie-chart.svg", url: "" },
    { text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { text: "User Manual", icon: "/imgs/guide.svg", url: "" },
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
              <SiteMap title="Property Info" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight ">
        <div className="container">
          <div className="row text-left">
            <div className="col-12 align-self-center mt-4">
              {data.map((item, index) => {
                return (
                  <Link key={index} to={item.url} className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src={item.icon} width="30px" />
                    <br />
                    <span className="mt-5 font-light">{item.text}</span>
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
