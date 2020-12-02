//TASK under Review
import React from "react";
import InfoPropertyDetails from "../propertyInfoComponent/InfoPropertyDetails";


export default function InfoUnit() {
  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      
      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5">
          <InfoPropertyDetails />
        </div>
      </div>
    </div>
  );
}
