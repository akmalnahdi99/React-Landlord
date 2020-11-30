import React from "react";
import Footer from "../components/static/Footer";

import SubscriptionFeeDetails from "./SubscriptionFeeDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsSubscriptionFee() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <SubscriptionFeeDetails title="Subscription Fee" />
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
