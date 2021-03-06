// #newPage
import React from "react";
import { Link } from "react-router-dom";

export default function BillsUnpaid  ({ title, status })  {
  
  return (
    <div className="ibox">
      <div className="ibox-content minhigh">
        <div className="ibox-bill minhigh pt-0">
          <div className="row">
            <div className="col-sm-7 pt-3">
              <h3 className="text-doorcase3">{title}</h3>
              <p>
                Status : <span className="text-danger">{ status}</span>
              </p>
            </div>
            <div className="btn-res pt-2">
              <br />
              <Link to="/landlord/payonline" className="btn btn-primary width140 mr-2 mb-2">
                Upload Bill
              </Link>
              <Link to="/landlord/paybycash" className="btn btn-success width140 mb-2">
                Upload Receipt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 