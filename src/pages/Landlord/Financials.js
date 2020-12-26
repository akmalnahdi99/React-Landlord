import React from "react";
import FinancialTable from "../../components/FinancialTable";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import FinancialTableFilter from "../../components/FinancialTableFilter";
import { apiCall } from "../../utils/landlordHelper";
import { AppContext } from "../../context/settings";

export default function LandLordFinancials() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedMonth, set_selectedMonth] = React.useState(new Date().getMonth());
  const [financials, set_financials] = React.useState(null);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadFinancialsWrapper() {
      setIsLoading(true);

      var response = await apiCall("/units/financials/?unitId=" + activeUnitId + "&month=" + selectedMonth);

      if (response.status) {
        set_financials(response.data);
      }
      setIsLoading(false);
    }
    loadFinancialsWrapper();
    // eslint-disable-next-line
  }, [activeUnitId, selectedMonth]);



  function filterSelection(x) {
    set_selectedMonth(x);
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
              <SiteMap title="Financials" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div className="container-fluid">
          <div className="row p-0 justify-content-center">
            <div className="col-lg-8 px-2">
              <FinancialTableFilter selectedMonth={selectedMonth} callBack={filterSelection} />
            </div>
          </div>
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="ibox ">
                  <FinancialTable title="Financial" isLoading={isLoading} data={financials} />
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
