import React from "react";
import Footer from "../components/static/Footer";
import InfoServiceChargeDetails from "./InfoServiceChargeDetails";
import Invoice from "../../src/bills_component/Invoice";

export default function InfoServiceCharge() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <InfoServiceChargeDetails title="Service Charge &amp; Sinking Fund" />
        </div>
        <div class="ibox">
          <Invoice title="Invoice" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
