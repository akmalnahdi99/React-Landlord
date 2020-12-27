import React from "react";
 
import QuitRentDetails from "./QuitRentDetails";
import Invoice from "./Invoice";


export default function BillsQuitRent({ utilityDetails, payments }) {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <div className="ibox ">
              <QuitRentDetails title="Quit Rent" details={utilityDetails} />
            </div>
            <div className="ibox">
              {payments.map((item, index) => {
                return <Invoice key={index} title="Invoice" details={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
