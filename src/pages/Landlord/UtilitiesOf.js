import React from "react";
import { Redirect, useParams } from "react-router-dom";

//TASK put all bills in this page
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import { AppContext } from "../../context/settings";
import Loading from "../../components/static/Loading";
import { apiCall } from "../../utils/landlordHelper";
import InfoWaterDetails from "../../propertyInfoComponent/InfoWaterDetails";
import InfoSewageDetails from "../../propertyInfoComponent/InfoSewageDetails";
import InfoElectricityDetails from "../../propertyInfoComponent/InfoElectricityDetails";
import InfoGasDetails from "../../propertyInfoComponent/InfoGasDetails";
import InfoCableTvDetails from "../../propertyInfoComponent/InfoCableTvDetails";
import InfoInternetDetails from "../../propertyInfoComponent/InfoInternetDetails";

export default function UtilitiesOf() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [utilityDetails, setUtilityDetails] = React.useState(true);
  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;
  var t = useParams();
  var utilityType = t.utilityType;

  React.useEffect(() => {
    
    async function loadUtilityDetailsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/units/utilityInfo/unitId=" + activeUnitId + "&companyFor=" + utilityType);
      if (response.status) {
        setUtilityDetails(response.data);
      }
      setIsLoading(false);
    }
    loadUtilityDetailsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

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

  console.log("In Facilities");

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
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="container container-xs">
            <div className="row justify-content-center">
              <div className="col-lg-9 mb-3">
                {utilityType === "Water" ? <InfoWaterDetails title="Water Rate" {...utilityDetails} /> : ""}
                {utilityType === "Electricity" ? <InfoElectricityDetails title="Electricity Rate" {...utilityDetails} /> : ""}
                {utilityType === "Sewage" ? <InfoSewageDetails title="Sewage" {...utilityDetails} /> : ""}
                {utilityType === "Internet" ? <InfoInternetDetails title="Internet" {...utilityDetails} /> : ""}
                {utilityType === "Cabletv" ? <InfoCableTvDetails title="Cable TV" {...utilityDetails} /> : ""}
                {utilityType === "Gas" ? <InfoGasDetails title="Gas Rate" {...utilityDetails} /> : ""}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
