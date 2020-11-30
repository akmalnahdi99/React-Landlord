import React from "react";
import Footer from "../components/static/Footer";

import ElectricityDetails from "./ElectricityDetails";

export default function BillsElectricity() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <ElectricityDetails title="Electricity" />
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
