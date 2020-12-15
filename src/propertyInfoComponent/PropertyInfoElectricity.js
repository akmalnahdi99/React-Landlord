import React from "react";
import Footer from "../components/static/Footer";
import InfoElectricityDetails from "./InfoElectricityDetails";

export default function InfoElectricity() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoElectricityDetails title="Electricity Rate" />
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
