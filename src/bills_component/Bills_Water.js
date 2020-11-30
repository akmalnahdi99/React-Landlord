import React from "react";
import Footer from "../components/static/Footer";

import Water_Details from "./Water_Details";

export default function BillsWater() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Water_Details title="Water" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
