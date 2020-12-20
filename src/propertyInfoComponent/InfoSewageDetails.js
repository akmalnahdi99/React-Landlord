import React from "react";

export default function InfoSewageDetails  ({ title,...details }) {
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>{title}</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row pt-0">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Company Name</h4>
                <p className="m-0">{details.companyName || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact number</h4>
                <p className="m-0">{details.contactNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.referenceNumber || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name payable</h4>
                <p className="m-0">{details.payableName || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Monthly charges</h4>
                <p className="m-0">{details.monthlyCharge || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
 