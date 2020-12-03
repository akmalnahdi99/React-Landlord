import React from "react";
import Footer from "../components/static/Footer";
import InfoElectricityDetails from "./InfoElectricityDetails";

export default function InfoElectricity() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <InfoElectricityDetails title="Electricity Rate" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
