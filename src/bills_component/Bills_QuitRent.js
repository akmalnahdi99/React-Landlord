import React from "react";
import Footer from "../components/static/Footer";

import QuitRent_Details from "./QuitRent_Details";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsQuitRent() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <QuitRent_Details title="Quit Rent" />
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
