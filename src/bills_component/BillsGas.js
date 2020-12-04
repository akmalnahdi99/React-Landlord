import React from "react";
import Footer from "../components/static/Footer";
import GasDetails from "./GasDetails";

export default function BillsGas() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
    <div class="container container-xs">
    <div className="row justify-content-center">
        <div className="col-lg-9 mb-3">
      <div class="ibox ">
          <GasDetails title="Internet" />
    </div>
    </div>
  </div>
  </div>
  <Footer />
</div>
  );
}
