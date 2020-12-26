/* Need to apply react */

import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import { Link } from "react-router-dom";

export default function QuickLinks() {
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
              <SiteMap title="Quick Link" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container">
          <div className="ibox">
            <div className="ibox-title">
              <h3>Bills</h3>
              <hr />
            </div>
            <div className="ibox-content minhigh">
              <div className="row text-left">
                <div className="col-12 align-self-center mt-4">
                  <Link to="BillsServiceCharge" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/money-bag.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Service Charge</span>
                  </Link>
                  <Link to="bills-insurance.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/insurance.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Insurance</span>
                  </Link>
                  <Link to="bills-quitrent.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/quitrent.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Quit Rent</span>
                  </Link>
                  <Link to="bills-assessmentrate.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/assessment.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Assessment Rate</span>
                  </Link>
                  <Link to="bills-subscription-fees.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/subscription.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Subscription Fees</span>
                  </Link>
                  <Link to="bills-maintenance.html" className="btn btn-dashboardicon btn-default width160 btn-lg m-2">
                    <img src="/imgs/settings.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Maintenance</span>
                  </Link>
                  <Link to="bills-water.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/water-drop.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Water</span>
                  </Link>
                  <Link to="bills-electricity.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/electricity.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Electricity</span>
                  </Link>
                  <Link to="bills-sewage.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/sewage.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Sewage</span>
                  </Link>
                  <Link to="bills-internet.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/wifi.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Internet</span>
                  </Link>
                  <Link to="bills-cabletv.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/tv.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Cabletv</span>
                  </Link>
                  <Link to="bills-gas.html" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                    <img src="/imgs/gas.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Gas</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox">
            <div className="ibox-title">
              <h3>Property Info</h3>
              <hr />
            </div>
            <div className="ibox-content minhigh">
              <div className="row text-left">
                <div className="col-12 align-self-center mt-4">
                  <Link to="info-tenancy.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/family.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Tenancy</span>
                  </Link>
                  <Link to="info-utilities.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/utilities.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Utilities</span>
                  </Link>
                  <Link to="info-insurance.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/insurance.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Insurance</span>
                  </Link>
                  <Link to="info-building.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/company.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Building</span>
                  </Link>
                  <Link to="info-unit.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/tenant.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Unit</span>
                  </Link>
                  <Link to="info-servicecharge.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/money-bag.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Service Charge</span>
                  </Link>
                  <Link to="info-rate-taxes.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/pie-chart.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Rate & Taxes</span>
                  </Link>
                  <Link to="info-assessmentrate.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img img src="/imgs/assessment.svg" width="24px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Assessment Rate</span>
                  </Link>
                  <Link to="info-quitrent.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/quitrent.svg" width="24px" alt="" />
                    <br />
                    <span className="mt-5 font-light">Quit Rent</span>
                  </Link>
                  <Link to="info-user-guide.html" className="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                    <img src="/imgs/guide.svg" width="30px" alt="" />
                    <br />
                    <span className="mt-5 font-light">User Manual</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
