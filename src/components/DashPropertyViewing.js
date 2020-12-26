import React from "react";
import DashChart from "./DashChart";
import { Link } from "react-router-dom"

const  DashPropertyViewing  = ({ title }) =>  {
  const data = [
    { text: "Past 30 days", value: 10, className: "fa fa-circle text-completedtask" },
    { text: "Today", value: 5, className: "fa fa-circle text-pendingtask" },
    { text: "Future", value: 10, className: "fa fa-circle text-newtask" },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/unitviewings">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/unitviewings">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <DashChart data={data} />
    </div>
  );
};

export default DashPropertyViewing