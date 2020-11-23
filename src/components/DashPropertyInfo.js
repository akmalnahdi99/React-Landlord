import React from "react";
import { Link } from "react-router-dom";
import DashIconsBox from "./DashIconsBox";

const DashPropertyInfo = ({ title }) => {
  const data = [
    { icon: "/imgs/family.svg", text: "Tenancy", url: "" },
    { icon: "/imgs/money-bag.svg", text: "Service Charge", url: "" },
    { icon: "/imgs/assessment.svg", text: "Assessment Rate", url: "" },
    { icon: "/imgs/utilities.svg", text: "Utilities", url: "" },
    { icon: "/imgs/quitrent.svg", text: "Quit Rent", url: "" },
    { icon: "/imgs/insurance.svg", text: "Insurance", url: "" },
    { icon: "/imgs/tenant.svg", text: "Unit", url: "" },
    { icon: "/imgs/company.svg", text: "Building", url: "" },
    { icon: "/imgs/guide.svg", text: "User Manual", url: "" },
  ];

  return <DashIconsBox title={title} data={data} />;
};

export default DashPropertyInfo;
