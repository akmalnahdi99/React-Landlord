//TASK under Review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import CheckInKitsList from "../../components/CheckInKitsList";

export default function PropertyInfo() {

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
              <SiteMap title="Check In Kit" />
            </div>
          </div>
        </div>
      </div>

    <div className="wrapper wrapper-content animated fadeInRight ">
    <div className="container">
        <CheckInKitsList />
    </div>
    </div>

<Footer />
</div>
  );
}

