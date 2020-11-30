import React from "react";
import Footer from "../components/static/Footer";

import WaterDetails from "./WaterDetails";

export default function BillsWater() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <WaterDetails title="Water" />
         
        </div>
      </div>
      <Footer />
    </div>
  );
}
