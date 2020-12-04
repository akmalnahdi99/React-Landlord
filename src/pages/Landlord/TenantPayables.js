//under review
import React from 'react'
import TenantPayablesList from "../../components/TenantPayablesList";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/static/Footer";

const TenantPayables = () => {
    return (
        <div>
            <div id="page-wrapper" className="bg-white" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Tenant Payables" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight gray-bg">
        <div className="container container-xs">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <TenantPayablesList />
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
        </div>
    )
}

export default TenantPayables
