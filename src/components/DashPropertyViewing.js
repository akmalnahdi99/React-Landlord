import React from "react";
import DashChart from "./DashChart";

export default function  DashPropertyViewing  ()  {
  const data = [
    { text: "Past 30 days", value: 10, className: "fa fa-circle text-completedtask" },
    { text: "Today", value: 5, className: "fa fa-circle text-pendingtask" },
    { text: "Future", value: 10, className: "fa fa-circle text-newtask" },
  ];
  return <DashChart title="Property Viewing" data={data} />;
};