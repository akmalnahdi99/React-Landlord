import React from "react";
import DashChart from "./DashChart";
import { Link } from "react-router-dom";

const DashRentalOffers = ({ title }) => {
  const data = [
    { text: "New", value: 10, className: "fa fa-circle text-completedtask" },
    { text: "Negotiations", value: 5, className: "fa fa-circle text-pendingtask" },
    { text: "Rejected", value: 10, className: "fa fa-circle text-rejectedtask" },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/offers">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/offers">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <DashChart data={data} />
    </div>
  );
};

export default DashRentalOffers;
