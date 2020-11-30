import React from "react";
import Footer from "../components/static/Footer";

import Sewage_Details from "./Sewage_Details";

export default function BillsWater() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Sewage_Details title="Sewage" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
