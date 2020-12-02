import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function Inventory() {

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
    <div className="border-bottom white-bg">
    <div className="container-fluid">
      <Header />
    </div>
  </div>
  <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Inventory List" />
            </div>
            </div>
        </div>
        </div>

      <Footer />
      </div>
   
  );
}