import React from "react";
import DashChart from "./DashChart";

const DashPropertyViewing = () => {
  const data = [
    { text: "Past 30 days", value: 10, className: "fa fa-circle text-completedtask" },
    { text: "Today", value: 1, className: "fa fa-circle text-pendingtask" },
    { text: "Future", value: 10, className: "fa fa-circle text-newtask" },
  ];
  return <DashChart title="Property Viewing" data={data} />;
};

export default DashPropertyViewing;
