import React from "react";
import Footer from "../components/static/Footer";
import InfoInternetDetails from "./InfoInternetDetails";

export default function InfoInternet() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <InfoInternetDetails title="Internet" />
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
