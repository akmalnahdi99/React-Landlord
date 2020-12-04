import React from "react";
import Footer from "../components/static/Footer";
import InfoSewageDetails from "./InfoSewageDetails";

export default function InfoSewage() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoSewageDetails title="Sewage" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
