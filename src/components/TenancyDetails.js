import React from "react";
import { Link } from "react-router-dom";

const TenancyDetails = ({ title }) => {
  var details = {
    duration: "12 Months",
    start: "23-10-2019",
    expiry: "22-10-2020",
    amount: "RM 5,200.00",
    occupants: "4",
  };

  return (
    <div className="ibox">
      <div className="ibox-title ">
        <h3>{title}</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh pt-0">
        <div className="row">
          <div className="col-sm-12">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Duration</h4>
                <p className="m-0">{details.duration}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Start date</h4>
                <p className="m-0">{details.start}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Expiry date</h4>
                <p className="m-0">{details.expiry}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Rental amount</h4>
                <p className="m-0">{details.amount}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Total occupants</h4>
                <p className="m-0">{details.occupants}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <div className="col-6 text-center">
            <Link to="tenancy-agreement.html" className="btn btn-success btn-block btn-lg mt-4">
              Tenancy agreement
            </Link>
          </div>
          <div className="col-6 text-center">
            <Link to="/landlord/TenancyDocs/" className="btn btn-primary btn-block btn-lg mt-4">
              Tenant's Documents
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenancyDetails;
