import { AppContext } from "context/settings";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { apiLoadData, processTenantPayablesPerContract } from "utils/landlordHelper";
import EmptyDashboard from "./EmptyDashboard";

import InfoCardItem from "./InfoCardItem";
import Loading from "./static/Loading";

export default function DashTenantPayables() {
  let history = useHistory();

  const [isLoading, setIsLoading] = React.useState(true);
  const [rentalFinancials, set_rentalFinancials] = React.useState([]);
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadRentalsFinancials() {
      setIsLoading(true);

      var response = await apiLoadData("tenantRentalsPerContract", { activeUnitId });
      var result = processTenantPayablesPerContract(response);

      if (result && result.length > 0)
      {
        set_rentalFinancials(result.slice(0, 3));
      }
      setIsLoading(false);
    }
    loadRentalsFinancials();

    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox illustrated3" onClick={() => history.push("/landlord/tenantpayables")} style={{ cursor: "pointer" }}>
      <Link className="dash-link" to="">
      <div className="ibox-title dash-title">
          <h5>
          Tenant Payables
        </h5>
        <div className="ibox-tools">
            <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      </Link>
      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list">
          {isLoading === true ? (
            <Loading />
          ) : (
            <React.Fragment>
              {rentalFinancials && rentalFinancials.length > 0 ? (
                rentalFinancials.map((item, index) => {
                  return <InfoCardItem key={index} {...item} />;
                })
              ) : (
                <EmptyDashboard title="Nothing to show" />
              )}
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
