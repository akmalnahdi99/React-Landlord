import React from "react";
import { Link } from "react-router-dom";

//TASK pls use Invoice Component and pass the difference as parameter
const InvoiceDetails = ({ title }) => {
  var invoice = {
    date: "07/23/2020",
    name: "Service Charge",
    status: "Paid",
  };
  return (
    <div className="ibox">
      <div className="ibox-title ">
        <h3>{title}</h3>
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row">
          <div className="col-sm-7 mb-3">
            <div className="media">
              <div className="media-body">
                <small>Due on {invoice.date}</small>
                <p className="m-0">{invoice.name}</p>
                <p>
                  Status : <span className="text-completedtask">{invoice.status}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md-5">
          <div className="btn-res">
            <Link to="" className="btn btn-primary width140 mr-2 mb-2">
              View Bill
            </Link>
            <Link to="" className="btn btn-success width140 mb-2">
              Upload Receipt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
