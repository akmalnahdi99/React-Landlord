import React from "react";
import { Link } from "react-router-dom";
import DashChart from "./DashChart";

const DashMaintenance = () => {
    const data = [
      { text: "new", value: 1, className: "fa fa-circle text-newtask" },
      { text: "In Progress", value: 2, className: "fa fa-circle text-pendingtask" },
      { text: "Resolved", value: 7, className: "fa fa-circle text-completedtask" },
    ];
  return <DashChart title="Maintenance" data={data} />;
};

export default DashMaintenance;