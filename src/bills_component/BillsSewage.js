import React from "react";
import Footer from "../components/static/Footer";

import SewageDetails from "./SewageDetails";

export default function BillsWater() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <SewageDetails title="Sewage" />
       
        </div>
      </div>
      <Footer />
    </div>
  );
}
