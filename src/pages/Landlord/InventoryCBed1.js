import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import InventoryCBed1Details from "../../components/InventoryCBed1Details";
import ConditionFilter from "../../components/ConditionFilter";

export default function InventoryCBed1() {
  // const { alert, hideAlert } = React.useContext(UserContext);

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
              <SiteMap title="Common Bedroom 1" />
            </div>
          </div>
        </div>
      </div>


      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="row p-0 justify-content-center pb-0">
          <div className="col-lg-8 px-2">
          <ConditionFilter/>
          </div>
        </div>
        <div className="container container-xs pb-5">
          <InventoryCBed1Details />
        </div>
      </div>

      <Footer />
    </div>
  );
}