import React from "react";



import CheckInLeafletData from "../../components/CheckInLeafletData";

export default function CheckInLeaflet() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <CheckInLeafletData />
          </div>
        </div>
      </div>
    </div>
  );
}
