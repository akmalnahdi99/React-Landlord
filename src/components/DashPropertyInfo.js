//TASK under Review
import React from "react";
import { Link } from "react-router-dom";
import DashIconsBox from "./DashIconsBox";

const DashPropertyInfo = ({ title }) => {
  const data = [
    { icon: "/imgs/family.svg", text: "Tenancy", url: "/landlord/propertyinfo/Tenancy" },
    { icon: "/imgs/money-bag.svg", text: "Service Charge", url: "/landlord/propertyinfo/ServiceCharge" },
    { icon: "/imgs/assessment.svg", text: "Assessment Rate", url: "/landlord/propertyinfo/AssessmentRate" },
    { icon: "/imgs/utilities.svg", text: "Utilities", url: "/landlord/propertyinfo/Utilities" },
    { icon: "/imgs/quitrent.svg", text: "Quit Rent", url: "/landlord/propertyinfo/QuitRent" },
    { icon: "/imgs/insurance.svg", text: "Insurance", url: "/landlord/propertyinfo/Insurance" },
    { icon: "/imgs/tenant.svg", text: "Unit", url: "/landlord/propertyinfo/Unit" },
    { icon: "/imgs/company.svg", text: "Building", url: "/landlord/propertyinfo/Building" },
    { icon: "/imgs/guide.svg", text: "User Manual", url: "/landlord/propertyinfo/UserManual" },
  ];

  return <DashIconsBox title={title} data={data} />;
};

export default DashPropertyInfo;
