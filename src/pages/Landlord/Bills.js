import React from "react";
import { Link } from "react-router-dom";




export default function Bills() {
  const data = [
    {
      key: "ServiceCharges",
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "Subscription", text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
    { key: "Maintenance", text: "Maintenance", icon: "/imgs/settings.svg", url: "" },
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  return (
    

      <div className="wrapper wrapper-content animated fadeInRight ">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 align-self-center mt-4">
              {data.map((item, index) => {
                return (
                  <Link key={index} to={"/landlord/bills/" + item.key} className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
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
      
  );
}
