import React from "react";
import Footer from "../components/static/Footer";

import Insurance_Details from "./Insurance_Details";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsInsurance() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Insurance_Details title="Insurance" />
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
