import React from "react";
import Footer from "../components/static/Footer";

import CabletvDetails from "./CabletvDetails";

export default function BillsCabletv() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <CabletvDetails title="Cable Tv" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
