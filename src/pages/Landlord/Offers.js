import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import OfferList from "../../components/OfferList";
import DividedHeader from "../../components/DividedHeader";
import { AppContext } from "../../context/settings";
import { apiCall } from "../../utils/landlordHelper";
import Loading from "../../components/static/Loading";

export default function Offers() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [offers, seOffers] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      setIsLoading(true);

      var response = await apiCall("/units/offers/" + activeUnitId);
    
      if (response.status) {
        seOffers(response.data);
      }
      setIsLoading(false);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, [activeUnitId]);

  var headerData = [];
  if (offers !== null) {
    headerData = [
      { name: "New", value: offers.filter((x) => x.status.toLocaleLowerCase() === "new".toLocaleLowerCase()).length },
      { name: "Accepted", value: offers.filter((x) => x.status.toLocaleLowerCase() === "accepted".toLocaleLowerCase() || x.status.toLocaleLowerCase() === "tempAccepted".toLocaleLowerCase()).length },
      { name: "Negotiations", value: offers.filter((x) => x.status.toLocaleLowerCase() === "negotiation".toLocaleLowerCase()).length },
      { name: "Rejected", value: offers.filter((x) => x.status.toLocaleLowerCase() === "rejected".toLocaleLowerCase()).length },
    ];
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
              <SiteMap title="Rental Offers" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5 px-0">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
              {isLoading === true ? (
                <Loading />
              ) : (
                <React.Fragment>
                  <DividedHeader data={headerData} />
                  <OfferList offers={offers} />
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
