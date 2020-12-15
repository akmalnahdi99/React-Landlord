import React from "react";

import WaterDetails from "./WaterDetails";

export default function BillsWater() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
      <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
        <div className="ibox ">
          <WaterDetails title="Water" />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
