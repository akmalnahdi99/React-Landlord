import React from "react";
import Footer from "../components/static/Footer";

import AssessmentRate_Details from "./AssessmentRate_Details";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function AssessmentRate() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <AssessmentRate_Details title="Assessment Rate" />
        </div>
        <div class="ibox">
          <Invoice title="Invoice" />
        </div>
        <div class="ibox">
          <Invoice2 title="Invoice" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
