import React from "react";
import RentalDonut from "./RentalDonut";
import { AppContext } from "../context/settings";

import Loading from "./static/Loading";
import InfoCardItem from "./InfoCardItem";
import { action_level_danger, apiCall } from "utils/landlordHelper";
import EmptyDashboard from "./EmptyDashboard";
 

export default function DashRentalGraph() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rentalStats, set_rentalStats] = React.useState(null);
  const appContext = React.useContext(AppContext);
  var activeUnitId = appContext.settings.activeUnitId;

  var infoCardData = {
    title: "",
    body: "",
    level: action_level_danger,
    address: "/landlord/payables",
  };

  React.useEffect(() => {
    async function loadRentalStats() {
      setIsLoading(true);
      var response = await apiCall("/units/landlordRentalStatsPerYear?unitId=" + activeUnitId, null, null, appContext);
      if (response.status) { 
        set_rentalStats(response.data);
      }
      setIsLoading(false);
    }
    loadRentalStats();

    // eslint-disable-next-line
  }, [activeUnitId]);

  if (rentalStats) {
    var previousYearNotPaidCount = rentalStats.previousYearNotPaidCount;
    var overDueCount = rentalStats.overDueCount;
 
    if (overDueCount > 0) {
      infoCardData.body = `${overDueCount} overdue payment${overDueCount > 0 ? "s" : ""}`;
    }

    if (previousYearNotPaidCount > 0) {
      infoCardData.title = "Previous Payments";
      if (infoCardData.body!== "")
          infoCardData.body += ', ';
      infoCardData.body += `${previousYearNotPaidCount} unpaid payment${previousYearNotPaidCount > 0 ? "s" : ""} from previous year`;
    }
  }

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>Rental</h5>
      </div>
      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            <RentalDonut {...rentalStats} />
            {infoCardData.body !== "" ? <InfoCardItem {...infoCardData} /> : <EmptyDashboard title="No Overdue" />}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
