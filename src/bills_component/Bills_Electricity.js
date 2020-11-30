import React from "react";
import Footer from "../components/static/Footer";

import Electricity_Details from "./Electricity_Details";

export default function BillsElectricity() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Electricity_Details title="Electricity" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
