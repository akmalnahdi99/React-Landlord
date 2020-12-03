import React from "react";
 
const InfoPropertyManagement = ({title}) => {
  var details = [
    {
      key: "Company name",
      value: "RAINE, HORNE & ZAKI PROPERTY MANAGEMENT SDN BHD",
    },
    {
      key: "Building address",
      value: "F-7M-01, Residensi Premium 2, No. 2, Jalan Kerinchi,   59200 Kuala Lumpur",
    },
    {
      key: "Contact number",
      value: "03-7931 1691",
    },
    {
        key: "Bank name",
        value: "CIMB",
    },
  ];
  var detailsright = [
    {
      key2: "Name payable",
      value2: "Suez Domain Sdn Bhd",
    },
    {
      key2: "Contact person",
      value2: "Prema",
    },
    {
      key2: "Email",
      value2: "premiumresidences.klgt@gmail.com",
    },
    {
      key2: "Bank account number",
      value2: "8009656480",
    },
  ];


  return (
    <div className="ibox ">
      <div className="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div className="ibox-content">
        <div className="row text-left">
          <div className="col-6">
            {details.map((item,index) => {
              return (
                <React.Fragment key={index}>
                  <h5 className="font-bold text-completedtask ">{item.key}</h5>
                  <span className="mb-3 font-normal">{item.value}</span>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
          <div className="col-6">
            {detailsright.map((item,index) => {
              return (
                <React.Fragment key={index}>
                  <h5 className="font-bold text-completedtask ">{item.key2}</h5>
                  <span className="mb-3 font-normal">{item.value2}</span>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPropertyManagement;
