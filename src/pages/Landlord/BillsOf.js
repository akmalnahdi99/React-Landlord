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
// import BillsWater from "../../bills_component/BillsWater";
// import BillsElectricity from "../../bills_component/BillsElectricity";
// import BillsSewage from "../../bills_component/BillsSewage";
// import BillsInternet from "../../bills_component/BillsInternet";
// import BillsCabletv from "../../bills_component/BillsCabletv";
// import BillsGas from "../../bills_component/BillsGas";
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
  var billType = t.billType;
  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const [payments, setPayments] = React.useState([]);

  React.useEffect(() => {
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + billType);
      if (response.status) {
        setUtilityDetails(response.data);
      }
      setIsLoading(false);
    }
  
   
    var withInvoices = ["ServiceCharges","Insurance", "QuitRent", "AssessmentRate", "Subscription", "Maintenance"];

    if (withInvoices.indexOf(billType) >= 0) {
      var financials = appContext.settings && appContext.settings.unitFinancials;
      var currMonth = new Date().getMonth()+1;
      var result = [];

      for (let month = currMonth; month >= 1; month--) {
        const element = financials[month].landlord[billType];
        if (element.paid !== null) {
          result[month] = element;
        }
      }
      setPayments(result);
    }

    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  if (!billType) {
    // if you don't have bill type we redirect back /land/bills/water
    return <Redirect to="/landlord/bills" />;
  }

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
      {isLoading === true ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="container container-xs">
              <div className="row justify-content-center">
                <div className="col-lg-9 mb-3">
                  {billType === "ServiceCharges" ? <BillsServiceCharge utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billType === "Insurance" ? <BillsInsurance utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billType === "QuitRent" ? <BillsQuitRent utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billType === "AssessmentRate" ? <BillsAssessmentRate utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billType === "Subscription" ? <BillsSubscriptionFee utilityDetails={utilityDetails} payments={payments} /> : ""}
                  {billType === "Maintenance" ? <BillsMaintenance utilityDetails={utilityDetails} payments={payments} /> : ""}

                  {/* Info Only Should we use these or reuse the unit ones */}

                  {/* <div className="border-red">
            {billType === "Water" ? <BillsWater /> : ""}
            {billType === "Electricity" ? <BillsElectricity /> : ""}
            {billType === "Sewage" ? <BillsSewage /> : ""}
            {billType === "Internet" ? <BillsInternet /> : ""}
            {billType === "Cabletv" ? <BillsCabletv /> : ""}
            {billType === "Gas" ? <BillsGas /> : ""}
          </div> */}

                  {billType === "Water" ? <InfoWaterDetails title="Water Rate" {...utilityDetails} /> : ""}
                  {billType === "Electricity" ? <InfoElectricityDetails title="Electricity Rate" {...utilityDetails} /> : ""}
                  {billType === "Sewage" ? <InfoSewageDetails title="Sewage" {...utilityDetails} /> : ""}
                  {billType === "Internet" ? <InfoInternetDetails title="Internet" {...utilityDetails} /> : ""}
                  {billType === "Cabletv" ? <InfoCableTvDetails title="Cable TV" {...utilityDetails} /> : ""}
                  {billType === "Gas" ? <InfoGasDetails title="Gas Rate" {...utilityDetails} /> : ""}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
}
