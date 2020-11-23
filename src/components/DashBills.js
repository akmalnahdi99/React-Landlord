import React from "react";
import { Link } from "react-router-dom";
import DashIconsBox from "./DashIconsBox";

const DashBills = ({title}) => {
  const data = [
    {
      icon: "/imgs/subscription.svg",
      text:"Subscription Fees",
      url: "bills-subscription-fees.html",
    },
    {
      icon: "/imgs/money-bag.svg",
      text:"Service Charge",
      url: "bills-service-charge.html",
    },
    {
      icon: "/imgs/assessment.svg",
      text:"Assessment Rate",
      url: "bills-assessmentrate.html",
    },
    {
      icon: "/imgs/insurance.svg",
      text:" Insurance",
      url: "bills-insurance.html",
    },
    {
      icon: "/imgs/quitrent.svg",
      text:" Quit Rent",
      url: "/",
    },
    {
      icon: "/imgs/settings.svg",
      text:"Maintenance",
      url: "/",
    },
    {
      icon: "/imgs/water-drop.svg",
      text:"Water",
      url: "/",
    },
    {
      icon: "/imgs/electricity.svg",
      text:"Electricity",
      url: "/",
    },
    {
      icon: "/imgs/more.svg",
      text:"More",
      url: "/",
    },
  ];
  return <DashIconsBox title={title} data={data} />;
};

export default DashBills;
