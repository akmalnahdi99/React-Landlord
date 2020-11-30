import React from "react";
import Footer from "../components/static/Footer";

import Internet_Details from "./Internet_Details";

export default function BillsInternet() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Internet_Details title="Internet" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
