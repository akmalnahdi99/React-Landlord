import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import CheckInLeafletData from "../../components/CheckInLeafletData";

export default function CheckInLeaflet() {
  return (
    <div id="page-wrapper" className="gray-bg">
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Information Leaflet" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container-fluid pb-5">
          <CheckInLeafletData />
        </div>
      </div>

      <Footer />
    </div>
  );
}
