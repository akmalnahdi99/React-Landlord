import React from "react";
import Footer from "../components/static/Footer";

import InsuranceDetails from "./InsuranceDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsInsurance() {
  return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div className="ibox ">
              <InsuranceDetails title="Insurance" />
          </div>
          <div className="ibox">
          <Invoice title="Invoice" />
        </div>
        <div className="ibox">
          <Invoice2 title="Invoice" />
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
