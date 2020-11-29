import React from "react";
 
const TenantDetails = ({title}) => {
  var details = [
    {
      key: "Full Name",
      value: "Sharon Bay Lin",
    },
    {
      key: "Phone Number",
      value: "+65 9682 1232",
    },
    {
      key: "NRIC No.",
      value: "475325-75-8888",
    },
    {
      key: "Email",
      value: "drsharonbay@yahoo.com",
    },
    {
      key: "Age",
      value: "44",
    },
    {
      key: "Gender",
      value: "Female",
    },
    {
      key: "Nationaility",
      value: "Singapore",
    },
    {
      key: "Passport Number",
      value: "-",
    },
    {
      key: "Occupation",
      value: "4",
    },
    {
      key: "Company Name",
      value: "Companyxyz",
    },
    {
      key: "Spouse",
      value: "Dennis K.",
    },
    {
      key: "Children",
      value: "2",
    },
    {
      key: "Pets",
      value: "2 Cats",
    },
  ];

  return (
    <div className="ibox ">
      <div className="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div className="ibox-content">
        <div className="row text-left">
          <div className="col-12">
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
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
