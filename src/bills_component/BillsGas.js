import React from "react";
import Footer from "../components/static/Footer";
import GasDetails from "./GasDetails";

export default function BillsGas() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <GasDetails title="Gas" />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}