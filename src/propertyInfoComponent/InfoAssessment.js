import React from "react";

import InfoAssessmentDetails from "./InfoAssessmentDetails";

export default function InfoAssessment() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
      <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
        <div class="ibox ">
          <InfoAssessmentDetails title="Assessment Rate" />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
