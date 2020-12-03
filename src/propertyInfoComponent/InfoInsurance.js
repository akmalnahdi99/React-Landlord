import React from "react";
import Footer from "../components/static/Footer";

import InfoInsuranceDetails from "./InfoInsuranceDetails";

export default function InfoInsurance() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <InfoInsuranceDetails title="Insurance" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
