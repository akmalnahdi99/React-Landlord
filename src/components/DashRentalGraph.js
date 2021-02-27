import React from "react";
import RentalDonut from "./RentalDonut";
import { AppContext } from "../context/settings";

import Loading from "./static/Loading";
import InfoCardItem from "./InfoCardItem";
import { apiCall } from "utils/landlordHelper";
import NoOverdue from "./EmptyOverdue";

export default function DashRentalGraph() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rentalStats, set_rentalStats] = React.useState(null);
  const appContext = React.useContext(AppContext);
  var activeUnitId = appContext.settings.activeUnitId;
 
  var infoCardData = {
    title: "Due On: 10/28/2020",
    body: "",
    color: "red",
    address: "/payables",
  };

  React.useEffect(() => {
   
    async function loadRentalStats() {
      setIsLoading(true);
      var response = await apiCall("/units/landlordRentalStatsPerYear?unitId=" + activeUnitId,null,null,appContext);
      if (response.status) {
        set_rentalStats(response.data);
      }
      setIsLoading(false);
    }
    loadRentalStats();

    // eslint-disable-next-line
  }, [activeUnitId]);

  if (rentalStats) {
    var previousNotPaidCount = rentalStats.previousNotPaidCount;

    if (previousNotPaidCount > 0) {
      infoCardData.title = "Previous Payments";
      infoCardData.body = `Tenant have ${previousNotPaidCount} unpaid payment${previousNotPaidCount > 0 ? "s" : ""} from previous year`;
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
            {infoCardData.body !== "" ? <InfoCardItem {...infoCardData} /> : <NoOverdue title="No Overdue" />}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
