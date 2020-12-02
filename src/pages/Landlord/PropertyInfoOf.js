//TASK under Review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import TenancyHome from "./TenancyHome";
import Utilities from "./Utilities";
import InfoInsurance from "../../propertyInfoComponent/InfoInsurance";
import InfoServiceCharge from "../../propertyInfoComponent/InfoServiceCharge";
import InfoAssessment from "../../propertyInfoComponent/InfoAssessment";
import InfoQuitRent from "../../propertyInfoComponent/InfoQuitRent";
import InfoUnit from "../../propertyInfoComponent/InfoUnit";
import InfoBuilding from "../../propertyInfoComponent/InfoBuilding";

export default function PropertyInfoOf() {
  var t = useParams();
  var propertyinfoType = t.propertyinfoType;

  if (!propertyinfoType) {
    // if you don't have bill type we redirect back
    return <Redirect to="/landlord/PropertyInfo" />;
  }
  const data = [
    {
      key: "Tenancy",
      text: "",
      icon: "/imgs/family.svg",
      url: "",
    },
    { key: "Utilities", text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "Building", text: "Building", icon: "/imgs/company.svg", url: "" },
    { key: "Unit", text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { key: "ServiceCharge", text: "Service Charge", icon: "/imgs/money-bag.svg", url: "" },
    { key: "RateTaxes", text: "Rate & Taxes", icon: "/imgs/pie-chart.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "UserManual", text: "User Manual", icon: "/imgs/guide.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === propertyinfoType.toUpperCase()) {
      allowed = true;
      break;
    }
  }

  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/propertyinfo" />;
  }

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
              <SiteMap title={propertyinfoType} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
      
      { (propertyinfoType==="Tenancy") ? <TenancyHome /> :( "") }
      { (propertyinfoType==="Utilities") ? <Utilities /> :( "") }
      { (propertyinfoType==="Insurance") ? <InfoInsurance /> :( "") }
      { (propertyinfoType==="ServiceCharge") ? <InfoServiceCharge /> :( "") }
      { (propertyinfoType==="AssessmentRate") ? <InfoAssessment /> :( "") }
      { (propertyinfoType==="QuitRent") ? <InfoQuitRent /> :( "") }
      { (propertyinfoType==="Unit") ? <InfoUnit /> :( "") }
      { (propertyinfoType==="Building") ? <InfoBuilding /> :( "") }

      <Footer />
    </div>
  );
}
