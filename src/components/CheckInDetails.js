import React from "react";
import { Link } from "react-router-dom";

const CheckInDetails = () => {

  return (
    <div className="ibox">
        <div className="ibox-content minhigh ">
            <br />
            <Link to="#" className="btn btn-primary btn-lg"><i className="fas fa-check-circle"></i> &nbsp;Checked In</Link>
            <p className="my-3 font-title">Tenant received check in
                Kit from Agent</p>
            <hr />
            <p className="my-3 text-doorcase3">17:50 - 11/11/2020</p>
            <Link className="btn-success btn btn-block" to="checkinkit.html">Check In Kit &nbsp;
                <i className="fas fa-long-arrow-alt-right"></i>
            </Link>

        </div>
    </div>
  );
};

export default CheckInDetails;
