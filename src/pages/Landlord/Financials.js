import React from 'react'
import FinancialTable from '../../components/FinancialTable';
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import FinancialTableFilter from "../../components/FinancialTableFilter";

 export default function Financials() {
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
              <SiteMap title="Financials" />
            </div>
            </div>
        </div>
        </div>

        <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" 
        style={{ borderBottom: "1px solid #fff" }}>
        <div class="container-fluid">
        <div className="row p-0 justify-content-center">
          <div className="col-lg-8 px-2">
            <FinancialTableFilter />
          </div>
        </div>
        </div>
      <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox ">
            <FinancialTable title="Financial" />
        </div>
        </div>
      </div>
      </div>
    <Footer />
    </div>
    );
}