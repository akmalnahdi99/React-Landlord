//under review
import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page

import BillsServiceCharge from "../../bills_component/BillsServiceCharge";
import BillsInsurance from "../../bills_component/BillsInsurance";
import BillsQuitRent from "../../bills_component/BillsQuitRent";
import BillsAssessmentRate from "../../bills_component/BillsAssessmentRate";
import BillsSubscriptionFee from "../../bills_component/BillsSubscriptionFee";
import BillsMaintenance from "../../bills_component/BillsMaintenance";
 
import InfoWaterDetails from "../../propertyInfoComponent/InfoWaterDetails";
import InfoElectricityDetails from "../../propertyInfoComponent/InfoElectricityDetails";
import InfoSewageDetails from "../../propertyInfoComponent/InfoSewageDetails";
import InfoInternetDetails from "../../propertyInfoComponent/InfoInternetDetails";
import InfoCableTvDetails from "../../propertyInfoComponent/InfoCableTvDetails";
import InfoGasDetails from "../../propertyInfoComponent/InfoGasDetails";
import Loading from "../../components/static/Loading";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";

export default function BillOf() {
  var t = useParams();
  var billOf = t.billOf;
  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const [payments, setPayments] = React.useState([]);

  React.useEffect(() => {
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + billOf);
      if (response.status) {
        setUtilityDetails(response.data);
      }
      setIsLoading(false);
    }

    var withInvoices = ["ServiceCharges", "Insurance", "QuitRent", "AssessmentRate", "Subscription", "Maintenance"];

    if (withInvoices.indexOf(billOf) >= 0) {
      var financials = appContext.settings && appContext.settings.unitFinancials;
      var result = [];
      const billsOf = (financials && financials["landlord"] && financials["landlord"][billOf]) || null;
      billsOf&&billsOf.forEach((element) => {
        if (element && element.paid !== true) {
          result.push(element);
        }
      });

      setPayments(result);
    }

    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!billOf) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/bills" />;
  }
  console.log("Bills Found", payments);
  const data = [
    {
      key: "ServiceCharges",
      text: "Service Charge",
      icon: "/imgs/money-bag.svg",
      url: "",
    },
    { key: "Insurance", text: "Insurance", icon: "/imgs/insurance.svg", url: "" },
    { key: "QuitRent", text: "Quit Rent", icon: "/imgs/quitrent.svg", url: "" },
    { key: "AssessmentRate", text: "Assessment Rate", icon: "/imgs/assessment.svg", url: "" },
    { key: "Subscription", text: "Subscription Fees", icon: "/imgs/subscription.svg", url: "" },
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
    if (data[i].key.toUpperCase() === billOf.toUpperCase()) {
      allowed = true;
      break;
    }
  }

  if (!allowed) {
    // if billtype is not exist we go back
    return <Redirect to="/landlord/bills" />;
  }

  return (
    <React.Fragment>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-3 px-0">
              {isLoading === true ? (
                <Loading />
              ) : (
                <React.Fragment>
                  {billOf === "ServiceCharges" ? <BillsServiceCharge utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billOf === "Insurance" ? <BillsInsurance utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billOf === "QuitRent" ? <BillsQuitRent utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billOf === "AssessmentRate" ? <BillsAssessmentRate utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billOf === "Subscription" ? <BillsSubscriptionFee utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billOf === "Maintenance" ? <BillsMaintenance utilityDetails={utilityDetails} payments={payments} /> : ""}
                 
                  {billOf === "Water" ? <InfoWaterDetails title="Water Rate" {...utilityDetails} /> : ""}
                  {billOf === "Electricity" ? <InfoElectricityDetails title="Electricity Rate" {...utilityDetails} /> : ""}
                  {billOf === "Sewage" ? <InfoSewageDetails title="Sewage" {...utilityDetails} /> : ""}
                  {billOf === "Internet" ? <InfoInternetDetails title="Internet" {...utilityDetails} /> : ""}
                  {billOf === "Cabletv" ? <InfoCableTvDetails title="Cable TV" {...utilityDetails} /> : ""}
                  {billOf === "Gas" ? <InfoGasDetails title="Gas Rate" {...utilityDetails} /> : ""}
                  
                  
                  
                  {/* {billOf === "Water" ? <BillsUnpaid title="January" {...BillsUnpaid} /> : ""}
                  {billOf === "Electricity" ? <BillsUnpaid title="February" {...BillsUnpaid} /> : ""}
                  {billOf === "Sewage" ? <BillsUnpaid title="January" {...BillsUnpaid} /> : ""}
                  {billOf === "Internet" ? <BillsUnpaid title="December" {...BillsUnpaid} /> : ""}
                  {billOf === "Cabletv" ? <BillsUnpaid title="December" {...BillsUnpaid} /> : ""}
                  {billOf === "Gas" ? <BillsUnpaid title="January" {...BillsUnpaid} /> : ""} */}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
