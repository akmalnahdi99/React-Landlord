import React from "react";
import Footer from "../components/static/Footer";

import SewageDetails from "./SewageDetails";

export default function BillsWater() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div className="ibox ">
              <SewageDetails title="Sewage" />
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
