import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//TASK Need To be completed

const DashCalendar = ({ title }) => {
  const [value, onChange] = useState(new Date());
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
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
export default DashCalendar;
