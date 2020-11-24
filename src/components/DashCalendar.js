import React from "react";
import { Link } from "react-router-dom";

//TASK Need To be completed

const DashCalendar = ({ title }) => {
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
      <div className="ibox-content">
        <div id="my-calendar"></div>
      </div>
    </div>
  );
};
export default DashCalendar;
