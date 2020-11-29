import React from "react";
import DashChart from "./DashChart";
import { Link } from "react-router-dom"

const DashMaintenance = ({ title }) => {
  const data = [
    { text: "new", value: 1, className: "fa fa-circle text-newtask" },
    { text: "In Progress", value: 2, className: "fa fa-circle text-pendingtask" },
    { text: "Resolved", value: 7, className: "fa fa-circle text-completedtask" },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/maintenance">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/maintenance">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <DashChart data={data} />
    </div>
  );
};

export default DashMaintenance;