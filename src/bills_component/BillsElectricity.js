import React from "react";
import Footer from "../components/static/Footer";

import ElectricityDetails from "./ElectricityDetails";

export default function BillsElectricity() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div className="ibox ">
              <ElectricityDetails title="Electricity" />
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
