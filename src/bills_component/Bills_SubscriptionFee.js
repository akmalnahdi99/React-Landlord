import React from "react";
import Footer from "../components/static/Footer";

import SubscriptionFee_Details from "./SubscriptionFee_Details";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsSubscriptionFee() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <SubscriptionFee_Details title="Subscription Fee" />
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
