import React from "react";
import Footer from "../components/static/Footer";
import InfoWaterDetails from "./InfoWaterDetails";

export default function InfoWater() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoWaterDetails title="Water Rate" />
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
