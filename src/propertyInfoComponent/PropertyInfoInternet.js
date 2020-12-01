import React from "react";
import Footer from "../components/static/Footer";
import InfoInternetDetails from "./InfoInternetDetails";

export default function InfoInternet() {

  return (
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="container container-xs">
          <div class="ibox ">
              <InfoInternetDetails title="Internet" />
          </div>
        </div>
      <Footer />
      </div>
  );
}