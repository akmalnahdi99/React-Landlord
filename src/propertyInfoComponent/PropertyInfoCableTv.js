import React from "react";
import Footer from "../components/static/Footer";
import InfoCableTvDetails from "./InfoCableTvDetails";

export default function InfoInternet() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoCableTvDetails title="Cable TV" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
