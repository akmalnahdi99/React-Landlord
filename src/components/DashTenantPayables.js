import React from "react";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import InfoCardItem from "./InfoCardItem";

export default function DashTenantPayables() {
  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "red",
    },
  ];
  return (
    <div className="ibox illustrated3" onclick="location.href='tenant-payables.html'" style={{ cursor: "pointer" }}>
      <div className="ibox-title bg-transparent">
        <h5>Tenant Payables</h5>
        <div className="ibox-tools">
          <Link href="tenant-payables.html">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list">
          {data.length > 0 ? (
            data.map((item, index) => {
              return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} />;
            })
          ) : (
            <Empty />
          )}
        </ul>
      </div>
    </div>
  );
}