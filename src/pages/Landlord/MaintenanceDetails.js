//TASK under Review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import MaintenanceDetailsList from "../../components/MaintenanceDetailsList";
import MaintenanceTimeLine from "../../components/MaintenanceTimeLine";
import { useParams } from "react-router-dom";


export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  var t = useParams();
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
      
          <MaintenanceTimeLine />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
