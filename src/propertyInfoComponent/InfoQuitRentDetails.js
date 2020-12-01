import React from "react";

const InfoQuitRent = ({ title }) => {
  var details = {
    charge: "RM 40.01",
    company: "Suez Domain Sdn Bhd",
    bank: "CIMB",
    ref_no: "G-21-07",
    contact: "03-7453 8045",
    account: "8009656480",
  };
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>{title}</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row pt-2">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Annual charges</h4>
                <p className="m-0">{details.charge}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bank}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact Number</h4>
                <p className="m-0">{details.contact}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.ref_no}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Company name</h4>
                <p className="m-0">{details.company}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank account number</h4>
                <p className="m-0">{details.account}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoQuitRent;
