import React from "react";
// import { FaWindowClose } from "react-icons/fa";

import Footer from "../../components/static/Footer";

import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import DividedHeader from "../../components/DividedHeader";
import MaintenanceList from "../../components/MaintenanceList";


export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);
    const headerData = [
      { name: "Past 30 days", value: 12 },
      { name: "Today", value: 12 },
      { name: "Future", value: 12 },
    ];

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
              <SiteMap title="Rental Offers" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5 px-0">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <DividedHeader data={headerData} />
            </div>
          </div>
          <MaintenanceList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
