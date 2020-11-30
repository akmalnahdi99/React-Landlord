import React from "react";
import Footer from "../../components/static/Footer";

import ServiceCharge_Details from "../../bills_component/ServiceCharge_Details";
import Invoice from "../../bills_component/Invoice";
import Invoice2 from "../../bills_component/Invoice2";

export default function BillsServiceCharge() {

  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <ServiceCharge_Details title="Service Charge &amp; Sinking Fund" />
          </div>
          <div class="ibox">
          <Invoice title="Invoice" />
          </div>
          <div class="ibox">
          <Invoice2 title="Invoice" />
          </div>
        </div>
      <Footer />
      </div>
  );
}
