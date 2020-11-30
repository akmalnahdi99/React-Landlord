import React from "react";
import Footer from "../components/static/Footer";

import MaintenanceDetails from "./MaintenanceDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsMaintenance() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <MaintenanceDetails title="Maintenance Fee" />
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
