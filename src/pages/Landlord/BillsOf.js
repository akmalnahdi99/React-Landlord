//under review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap"; 
import BillsServiceCharge from "../../bills_component/BillsServiceCharge";
import BillsInsurance from "../../bills_component/BillsInsurance";
import BillsQuitRent from "../../bills_component/BillsQuitRent";
import BillsAssessmentRate from "../../bills_component/BillsAssessmentRate";
import BillsSubscriptionFee from "../../bills_component/BillsSubscriptionFee";
import BillsMaintenance from "../../bills_component/BillsMaintenance";
import BillsWater from "../../bills_component/BillsWater";
import BillsElectricity from "../../bills_component/BillsElectricity";
import BillsSewage from "../../bills_component/BillsSewage";
import BillsInternet from "../../bills_component/BillsInternet";
import BillsCabletv from "../../bills_component/BillsCabletv";
import BillsGas from "../../bills_component/BillsGas";



export default function BillOf() {
  var t = useParams();
  var billType = t.billType;

  if (!billType) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/bills" />;
  }

  const data = [
    {
      key: "ServiceCharge",
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "SubscriptionFees", text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
    { key: "Maintenance", text: "Maintenance", icon: "/imgs/settings.svg", url: "" },
    { key: "Water", text: "Water", icon: "/imgs/water-drop.svg", url: "" },
    { key: "Electricity", text: "Electricity", icon: "/imgs/electricity.svg", url: "" },
    { key: "Sewage", text: "Sewage", icon: "/imgs/sewage.svg", url: "" },
    { key: "Internet", text: "Internet", icon: "/imgs/wifi.svg", url: "" },
    { key: "Cabletv", text: "Cabletv", icon: "/imgs/tv.svg", url: "" },
    { key: "Gas", text: "Gas", icon: "/imgs/gas.svg", url: "" },
  ];

  var allowed = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].key.toUpperCase() === billType.toUpperCase()) {
      allowed = true;
      break;
    }
  }

  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/bills" />;
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
              <SiteMap title={billType} />
            </div>
          </div>
        </div>
      </div>

          { (billType==="ServiceCharge") ? <BillsServiceCharge /> :( "") }
          { (billType==="Insurance") ? <BillsInsurance /> :( "") }
          { (billType==="QuitRent") ? <BillsQuitRent /> :( "") }
          { (billType==="AssessmentRate") ? <BillsAssessmentRate /> :( "") }
          { (billType==="SubscriptionFees") ? <BillsSubscriptionFee /> :( "") }
          { (billType==="Maintenance") ? <BillsMaintenance /> :( "") }
          { (billType==="Water") ? <BillsWater /> :( "") }
          { (billType==="Electricity") ? <BillsElectricity /> :( "") }
          { (billType==="Sewage") ? <BillsSewage /> :( "") }
          { (billType==="Internet") ? <BillsInternet /> :( "") }
          { (billType==="Cabletv") ? <BillsCabletv /> :( "") }
          { (billType==="Gas") ? <BillsGas /> :( "") }

      <Footer />
    </div>
  );
}
