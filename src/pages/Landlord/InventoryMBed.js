import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import InventoryMBedDetails from "../../components/InventoryMBedDetails";
import ConditionFilter from "../../components/ConditionFilter";

export default function InventoryMBed() {
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
              <SiteMap title="Master Bedroom" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row justify-content-center">
            <div className="col-lg-8 mb-3">
        <div className="row p-0 justify-content-center pb-0">
          <div className="col-lg-8 px-2">
          <ConditionFilter/>
          <br/>
          </div>
        </div>
        <div className="container container-xs pb-5">
          <InventoryMBedDetails />
        </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}