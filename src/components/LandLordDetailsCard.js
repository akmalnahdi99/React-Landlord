import React from "react";
import { Link } from "react-router-dom";
 
const LandLordDetailsCard = ({title}) => {
  var details = [
    {
      key: "Full Name",
      value: "Sharon Bay Lin",
    },
    {
      key: "Citizen",
      value: "Singaporean",
    },
    {
      key: "Phone Number",
      value: "+65 9682 1232",
    },
    {
      key: "Email",
      value: "drsharonbay@yahoo.com",
    },
    {
      key: "NRIC No",
      value: "10009429761",
    },
    {
      key: "Passport Number",
      value: "TB450652",
    },
  ];

  return (
    <div class="ibox ">
      <div class="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div class="ibox-content">
        <div class="row text-left">
          <div class="col-12">
            {details.map((item,index) => {
              return (
                <React.Fragment key={index}>
                  <h5 class="font-bold text-completedtask ">{item.key}</h5>
                  <span class="mb-3 font-normal">{item.value}</span>
                  <hr />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div class="ibox-footer">
        <Link to="/logout" class="btn btn-link pl-0 font-bold">
          <i class="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default LandLordDetailsCard;
