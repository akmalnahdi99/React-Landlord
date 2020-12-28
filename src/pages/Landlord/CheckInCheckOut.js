import React from "react";



import CheckInDetails from "../../components/CheckInDetails";
import CheckOutDetails from "../../components/CheckOutDetails";

export default function CheckInCheckOut() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <CheckInDetails />
          </div>
          <div className="col-sm-4">
            <CheckOutDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
