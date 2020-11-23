import React from "react";
import { Link } from "react-router-dom";
import DashChart from "./DashChart";

const DashRentalOffers = () => {
  const data = [
    { text: "new", value: 10, className: "fa fa-circle text-newtask" },
    { text: "Negotiations", value: 10, className: "fa fa-circle text-pendingtask" },
    { text: "Rejected", value: 30, className: "fa fa-circle text-rejectedtask" },
  ];
  return <DashChart title="Rental Offers" data={data} sliceColor="hh-red" />;
};

export default DashRentalOffers;
