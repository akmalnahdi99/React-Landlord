import React from "react";

const InfoServiceChargeDetails = ({ title }) => {
  var details = {
    service_cherge: "RM 0.00",
    name: "Raine, Horne & Zaki Property Management Sdn Bhd",
    bank: "Maybank",
    sinking_fund: "RM 0.00",
    account: "123456789012",
    contact: "+603 123 456",
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
                <h4 className="text-doorcase3">Service charge monthly amount</h4>
                <p className="m-0">{details.service_cherge}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Sinking fund monthly amount</h4>
                <p className="m-0">{details.sinking_fund}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-sm-12">
            <h3>Payable To</h3>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Name payable</h4>
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
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Bank name</h4>
                <p className="m-0">{details.bank}</p>
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

export default InfoServiceChargeDetails;
