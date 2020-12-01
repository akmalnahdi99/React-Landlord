import React from "react";

const InsuranceDetails = ({ title }) => {
  var details = {
    developer: "Suez Capital Sdn Bhd",
    name: "Residensi Premium 1 & 2",
    type: "Service Residence",
    tenure: "Leasehold",
    date: "2018",
    unit: "466",
    level: "37",
    block: "2",
    address: "No. 2, Jalan Kerinchi, Gerbang Kerinchi Lestari, 59200 Kuala Lumpur",
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
                <h4 className="text-doorcase3">Name</h4>
                <p className="m-0">{details.name}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Address</h4>
                <p className="m-0">{details.address}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Developer</h4>
                <p className="m-0">{details.developer}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Type</h4>
                <p className="m-0">{details.type}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Tenure</h4>
                <p className="m-0">{details.tenure}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Completion date</h4>
                <p className="m-0">{details.date}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Total Units</h4>
                <p className="m-0">{details.unit}</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Total levels</h4>
                <p className="m-0">{details.level}</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-sm-6">
            <div className="media">
              <div className="media-body">
                <h4 className="text-doorcase3">Total Blocks</h4>
                <p className="m-0">{details.block}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
