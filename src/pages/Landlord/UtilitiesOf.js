import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

import BillsCabletv from "../../bills_component/BillsCabletv";

import PropertyInfoGas from "../../propertyInfoComponent/PropertyInfoGas";
import PropertyInfoElectricity from "../../propertyInfoComponent/PropertyInfoElectricity";
import PropertyInfoWater from "../../propertyInfoComponent/PropertyInfoWater";
import PropertyInfoSewage from "../../propertyInfoComponent/PropertyInfoSewage";
import PropertyInfoInternet from "../../propertyInfoComponent/PropertyInfoInternet";
import PropertyInfoCableTv from "../../propertyInfoComponent/PropertyInfoCableTv";


export default function UtilitiesOf() {
  var t = useParams();
  var utilityType = t.utilityType;

  if (!utilityType) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/propertyinfo" />;
  }

  const data = [
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === utilityType.toUpperCase()) {
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
              <SiteMap title={utilityType} />
            </div>
          </div>
        </div>
      </div>

          { (utilityType==="Water") ? <PropertyInfoWater /> :( "") }
          { (utilityType==="Electricity") ? <PropertyInfoElectricity /> :( "") }
          { (utilityType==="Sewage") ? <PropertyInfoSewage /> :( "") }
          { (utilityType==="Internet") ? <PropertyInfoInternet /> :( "") }
          { (utilityType==="Cabletv") ? <PropertyInfoCableTv /> :( "") }
          { (utilityType==="Gas") ? <PropertyInfoGas /> :( "") }

      <Footer />
    </div>
  );
}
