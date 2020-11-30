import React from "react";
import Footer from "../components/static/Footer";
import Gas_Details from "./Gas_Details";

export default function BillsGas() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Gas_Details title="Gas" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
