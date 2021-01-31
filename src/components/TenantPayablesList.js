import { AppContext } from "context/settings";
import React from "react";
import { apiLoadData, processTenantPayablesPerContract } from "utils/landlordHelper";

import EmptyDashboard from "./EmptyDashboard";
import InfoCardItem from "./InfoCardItem";
import Loading from "./static/Loading";
//import TenantPayablesItem from "./TenantPayablesItem";

export default function TenantPayablesList() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [rentalFinancials, set_rentalFinancials] = React.useState([]);
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadRentalsFinancials() {
      setIsLoading(true);

      var response = await apiLoadData("tenantRentalsPerContract", { activeUnitId });
      var result = processTenantPayablesPerContract(response);

      set_rentalFinancials(result);

      setIsLoading(false);
    }
    loadRentalsFinancials();

    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Tenant Payables</h3>
      </div>
      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {isLoading === true ? (
              <Loading />
            ) : (
              <React.Fragment>
                {rentalFinancials && rentalFinancials.length > 0 ? (
                  rentalFinancials.map((item) => {
                    return <InfoCardItem key={item.id} {...item} />;
                  })
                ) : (
                  <EmptyDashboard title="No items" />
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
