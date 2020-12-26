import React from "react";
import { Link } from "react-router-dom";

export default function Quicklinks ({ title })  {
  const data = [
    { text: "TenantInfo", icon: "/imgs/id-card.svg",url:"" },
    { text: "Subscription Fees", icon: "/imgs/subscription.svg",url:"" },
    { text: "Service Charge", icon: "/imgs/money-bag.svg",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
    { text: "Add Shortcut", icon: "fas fa-plus",url:"" },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
        <Link to="/landlord/quicklinks">{title}</Link></h5>
      </div>
      <div className="ibox-tools">
        <Link to="/landlord/quicklinks">
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="ibox-content pt-0">
        <div className="row text-center">
          {data.map((item, index) => {
            if (item.text.toLowerCase() !== "add shortcut".toLowerCase()) {
              return (
                <div key={index} className="col-md-4 col-sm-4 col-4 p-2">
                  <Link to="tenant-details.html" className="btn btn-default btn-dashboardicon btn-block text-truncate">
                    <img src={item.icon} alt={item.text} width="24px" />
                    <br />
                    {item.text}
                  </Link>
                </div>
              );
            } else {
              return (
                <div className="col-md-4 col-sm-4 col-4 p-2">
                  <Link to="/quicklinks" className="btn btn-shortcut btn-block text-truncate">
                    <i className={item.icon}></i>
                    <br />
                    {item.text}
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};


