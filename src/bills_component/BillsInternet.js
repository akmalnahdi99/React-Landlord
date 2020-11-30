import React from "react";
import Footer from "../components/static/Footer";

import InternetDetails from "./InternetDetails";

export default function BillsInternet() {
  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <InternetDetails title="Internet" />
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
