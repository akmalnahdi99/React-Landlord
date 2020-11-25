import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

 //TASK Check WIth PropertyInfo name 
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function PropertyInfoList() {
  var t = useParams();
  var listType = t.listType;

  if (!listType) {
      // if you don't have list type we redirect back
    return <Redirect to="/landlord/propertyinfo" />;
  }
 
  const data = [
    {
        text: "Tenancy",
        icon: "/imgs/family.svg",
        url: "",
      },
    { text: "Utilities", icon: "/imgs/utilities.svg", url: "" },
    { text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { text: "Building", icon: "/imgs/company.svg", url: "" },
    { text: "Unit", icon: "/imgs/tenant.svg", url: "" },
    { text: "Service Charge", icon: "/imgs/money-bag.svg", url: "" },
    { text: "Rate & Taxes", icon: "/imgs/pie-chart.svg", url: "" },
    { text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { text: "User Manual", icon: "/imgs/guide.svg", url: "" },
  ];
 
  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === listType.toUpperCase()) {
      allowed = true;
      break;
    }
  }
 
  if (!allowed) {
    // if listtype is not exist we go back
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
              <SiteMap title={listType} />
            </div>
          </div>
        </div>
      </div>

      {listType}

      <Footer />
    </div>
  );
}
