//TASK under Review
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function PropertyInfo() {
  const data = [
    {
      key: "Tenancy",
      text: "Tenancy",
      icon: "/imgs/family.svg",
      url: "",
    },
    { key: "Utilities", text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "Building", text: "Building", icon: "/imgs/company.svg", url: "" },
    { key: "Unit", text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { key: "ServiceCharge",text: "Service Charge", icon: "/imgs/money-bag.svg", url: "" },
    { key: "AssessmentRate",text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "UserManual",text: "User Manual", icon: "/imgs/guide.svg", url: "" },
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
          <div className="row">
            <div className="col-12 align-self-center mt-4">
              {data.map((item, index) => {
                return (
                  <Link key={index} to={"/landlord/propertyinfo/" + item.key} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
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

