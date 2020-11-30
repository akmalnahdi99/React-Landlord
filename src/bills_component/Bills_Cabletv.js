import React from "react";
import Footer from "../components/static/Footer";

import Cabletv_Details from "./Cabletv_Details";

export default function BillsCabletv() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <Cabletv_Details title="Cable Tv" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
