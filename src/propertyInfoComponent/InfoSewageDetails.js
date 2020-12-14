import React from "react";

const InfoSewageDetails = ({ title }) => {
  var details = {
    ref_no: "G-21-07",
    name: "Indah Water Konsortium Sdn Bhd",
    payable: "Indah Water Konsortium Sdn Bhd",
    charges: "RM 8.00",
    contact: "03-2780 1100",
  };
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
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact number</h4>
                <p className="m-0">{details.contact}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Reference number</h4>
                <p className="m-0">{details.ref_no}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name payable</h4>
                <p className="m-0">{details.payable}</p>
              </div>
            </div>
            <hr />
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Monthly charges</h4>
                <p className="m-0">{details.charges}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSewageDetails;
