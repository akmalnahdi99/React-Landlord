import React from "react";
import { Link } from "react-router-dom";

const CheckOutDetails = () => {

  return (
    <div className="ibox">
        <div className="ibox-content minhigh">
            <br />
            <Link to="#" className="btn btn-primary btn-outline disabled btn-lg"><i className="fas fa-check-circle"></i> &nbsp;
                Check Out</Link>
            <p className="my-3 font-title">-</p>
            <hr />
            <p className="my-3 text-doorcase3">-</p>
            <Link className="btn-success btn btn-block" to="checkoutkit.html">Check Out Kit &nbsp;
                <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
        </div>
    </div>
  );
};

export default CheckOutDetails;
