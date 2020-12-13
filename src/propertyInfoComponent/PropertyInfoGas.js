import React from "react";
import Footer from "../components/static/Footer";
import InfoGasDetails from "./InfoGasDetails";

export default function InfoGas() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoGasDetails title="Gas Rate" />
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
