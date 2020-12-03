import React from "react";
import Footer from "../components/static/Footer";
import InfoSewageDetails from "./InfoSewageDetails";

export default function InfoSewage() {
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
          <InfoSewageDetails title="Sewage" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
