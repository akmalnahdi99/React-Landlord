import React from "react";

export default function InfoWaterDetails({title, ...details }) {
 
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
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bankName || "N/A"}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.bankAccountNumber || "N/A"}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
 