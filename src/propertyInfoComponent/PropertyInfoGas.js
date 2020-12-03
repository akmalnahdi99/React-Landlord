import React from "react";
import Footer from "../components/static/Footer";
import InfoGasDetails from "./InfoGasDetails";

export default function InfoGas() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <InfoGasDetails title="Gas Rate" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
