import React from "react";
import Footer from "../components/static/Footer";

import QuitRentDetails from "./QuitRentDetails";
import Invoice from "./Invoice";
import Invoice2 from "./Invoice2";

export default function BillsQuitRent() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <div class="ibox ">
              <QuitRentDetails title="Quit Rent" />
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
