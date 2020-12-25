//under review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import TenancyDetails from "../../components/TenancyDetails";
import TenantDetails from "../../components/TenantDetails";
import UserPhotoCard from "../../components/userPhotoCard";
import { AppContext } from "../../context/settings";
import Loading from "../../components/static/Loading";
import { apiCall } from "../../utils/landlordHelper";

export default function TenantTenancyDetails() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userInfo, setUserInfo] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      setIsLoading(true);

      var response = await apiCall("/units/tenantInfo/" + activeUnitId);
      if (response.status) {
        setUserInfo(response.data);
      }
      setIsLoading(false);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, [activeUnitId]);

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
              <SiteMap title="Tenant &amp; Tenancy" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5">
          <div className="row">
            <React.Fragment>
              <div className="col-md-4 mb-3 px-2">{isLoading === true ? <Loading /> : <UserPhotoCard {...userInfo} />}</div>
              <div className="col-md-8 px-2">
                <TenancyDetails title="Tenancy Details" />
                <TenantDetails title="Tenant's Details" />
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
