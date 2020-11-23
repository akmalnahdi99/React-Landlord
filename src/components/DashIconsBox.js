import React from "react";
import { Link } from "react-router-dom";

export default function DashIconsBox({ title, data }) {
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/">{title}</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="ibox-content pt-0">
        <div className="row text-center">
          {data.map((item, index) => {
            return (
              <div key={index} class="col-md-4 col-sm-4 col-4 p-2">
                <Link to={item.url} class="btn btn-default btn-block px-1 btn-dashboardicon text-truncate">
                  <img src={item.icon} width="24px" alt={item.text} />
                  <br /> {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
