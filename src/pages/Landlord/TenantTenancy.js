//under review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import TenancyDetails from "../../components/TenancyDetails";
import TenantDetails from "../../components/TenantDetails";
import TenantPhotoCard from "../../components/TenantPhoto";

export default function TenantTenancy() {
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
              <SiteMap title="Tenant &amp; Tenancy" />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div class="container container-xs pb-5">
          <div class="row">
            <div class="col-md-4 mb-3 px-2">
              <TenantPhotoCard />
            </div>
            <div class="col-md-8 px-2">
              <TenancyDetails title="Tenancy Details" />
              <TenantDetails title="Owner's Details" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}