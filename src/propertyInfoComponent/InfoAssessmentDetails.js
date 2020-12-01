import React from "react";

const InfoAssessment = ({ title }) => {
  var details = {
    rate: "RM 0.00",
    company: "Dewan Bandaraya Kuala Lumpur",
    name: "Bendahari Bandaraya",
    ref_no: "G-21-07",
    contact: "+603 2083 2828",
  };
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>{title}</h3>
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row pt-2">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Half yearly rate</h4>
                <p className="m-0">{details.rate}</p>
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
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name Payable</h4>
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Contact number</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAssessment;
