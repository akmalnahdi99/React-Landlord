import React from "react";
import Footer from "../components/static/Footer";

import ServiceChargeDetails from "./ServiceChargeDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

//TASK pls for Invoice and Invoice2 use extra parameter like type = "paid",
// then style the element based on the type
// if type==paid className = '...'
// else if type="pending" className = '...'
export default function BillsServiceCharge() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <ServiceChargeDetails title="Service Charge &amp; Sinking Fund" />
          </div>
          <div class="ibox">
          <Invoice title="Invoice" />
          {/* <Invoice title="Invoice"  type="paid"/> */}
        </div>
        <div class="ibox">
          {/* <Invoice title="Invoice"  type="pending"/> */}
          <Invoice2 title="Invoice" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
