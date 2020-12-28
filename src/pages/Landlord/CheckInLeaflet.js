import React from "react";



import CheckInLeafletData from "../../components/CheckInLeafletData";

export default function CheckInLeaflet() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <CheckInLeafletData />
          </div>
        </div>
      </div>
    </div>
  );
}
