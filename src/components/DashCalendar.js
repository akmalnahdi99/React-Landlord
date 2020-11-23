import React from "react";
import { Link } from "react-router-dom";

//TASK Need To be completed

const DashCalendar = () => {
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link href="calendar.html">Calendar</Link>
        </h5>
        <div className="ibox-tools">
          <Link href="calendar.html">
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
