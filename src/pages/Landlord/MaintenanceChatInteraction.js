//TASK under Review
import React from "react";
import { FaWindowClose } from "react-icons/fa";
// import { FaWindowClose } from "react-icons/fa";

import Footer from "../../components/static/Footer";

import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import MaintenanceDetailsList from "../../components/MaintenanceDetailsList";
import MaintenanceInteractionChat from "../../components/MaintenanceInteractionChat";


export default function Maintenance() {
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
              <SiteMap title="Maintenance Details" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5">
          <MaintenanceDetailsList />
      
          <MaintenanceInteractionChat />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
