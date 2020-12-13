import React from "react";
import Footer from "../components/static/Footer";

import SewageDetails from "./SewageDetails";

export default function BillsWater() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div class="ibox ">
              <SewageDetails title="Sewage" />
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
