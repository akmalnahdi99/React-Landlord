import React from "react";
import Footer from "../components/static/Footer";
import InfoWaterDetails from "./InfoWaterDetails";

export default function InfoWater() {

  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <InfoWaterDetails title="Water Rate" />
          </div>
        </div>
      <Footer />
      </div>
  );
}