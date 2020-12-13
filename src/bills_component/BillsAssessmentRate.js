import React from "react";
import Footer from "../components/static/Footer";

import AssessmentRateDetails from "./AssessmentRateDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function AssessmentRate() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div class="ibox ">
              <AssessmentRateDetails title="Assessment Rate" />
          </div>
          <div class="ibox">
          <Invoice title="Invoice" />
        </div>
        <div class="ibox">
          <Invoice2 title="Invoice" />
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
