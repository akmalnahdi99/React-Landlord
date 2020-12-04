/* Need to apply react */

import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import { Link } from "react-router-dom";
const QuickLinks = () => {
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
        <div class="container">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h3>Bills</h3>
                            <hr />
                        </div>
                        <div class="ibox-content minhigh">
                            <div class="row text-left">
                                <div class="col-12 align-self-center mt-4">
                                    <Link to="BillsServiceCharge" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/money-bag.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Service Charge
                                        </span>
                                    </Link>
                                    <Link to="bills-insurance.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/insurance.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Insurance
                                        </span>
                                    </Link>
                                    <Link to="bills-quitrent.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/quitrent.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Quit Rent
                                        </span>
                                    </Link>
                                    <Link to="bills-assessmentrate.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/assessment.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Assessment Rate
                                        </span>
                                    </Link>
                                    <Link to="bills-subscription-fees.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/subscription.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Subscription Fees
                                        </span>
                                    </Link>
                                    <Link to="bills-maintenance.html" class="btn btn-dashboardicon btn-default width160 btn-lg m-2">
                                        <img src="/imgs/settings.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                        Maintenance
                                        </span>
                                    </Link>
                                    <Link to="bills-water.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/water-drop.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Water
                                        </span>
                                    </Link>
                                    <Link to="bills-electricity.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/electricity.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Electricity
                                        </span>
                                    </Link>
                                    <Link to="bills-sewage.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/sewage.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Sewage
                                        </span>
                                    </Link>
                                    <Link to="bills-internet.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/wifi.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Internet
                                        </span>
                                    </Link>
                                    <Link to="bills-cabletv.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/tv.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Cabletv
                                        </span>
                                    </Link>
                                    <Link to="bills-gas.html" class="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
                                        <img src="/imgs/gas.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Gas
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ibox">
                        <div class="ibox-title">
                            <h3>Property Info</h3>
                            <hr />
                        </div>
                        <div class="ibox-content minhigh">
                            <div class="row text-left">
                                <div class="col-12 align-self-center mt-4">
                                    <Link to="info-tenancy.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/family.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Tenancy
                                        </span>
                                    </Link>
                                    <Link to="info-utilities.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/utilities.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Utilities
                                        </span>
                                    </Link>
                                    <Link to="info-insurance.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/insurance.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Insurance
                                        </span>
                                    </Link>
                                    <Link to="info-building.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/company.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Building
                                        </span>
                                    </Link>
                                    <Link to="info-unit.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/tenant.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Unit
                                        </span>
                                    </Link>
                                    <Link to="info-servicecharge.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/money-bag.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Service Charge
                                        </span>
                                    </Link>
                                    <Link to="info-rate-taxes.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/pie-chart.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Rate & Taxes
                                        </span>
                                    </Link>
                                    <Link to="info-assessmentrate.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img img src="/imgs/assessment.svg" width="24px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Assessment Rate
                                        </span>
                                    </Link>
                                    <Link to="info-quitrent.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/quitrent.svg" width="24px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            Quit Rent
                                        </span>
                                    </Link>
                                    <Link to="info-user-guide.html" class="btn btn-dashboardicon current btn-default width160 btn-lg m-2">
                                        <img src="/imgs/guide.svg" width="30px" />
                                        <br />
                                        <span class="mt-5 font-light">
                                            User Manual
                                        </span>
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

export default QuickLinks
