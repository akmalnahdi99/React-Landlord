import React from "react";
import Footer from "../components/static/Footer";
import InfoCableTvDetails from "./InfoCableTvDetails";

export default function InfoInternet() {

  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <InfoCableTvDetails title="Cable TV" />
          </div>
        </div>
      <Footer />
      </div>
  );
}