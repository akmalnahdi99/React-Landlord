import React from "react";
import RentalDonut from "./RentalDonut";
import InfoCardItem from "./InfoCardItem";
const DashRentalGraph = () => {
  const title = "Due On: 10/28/2020";
  const body = "Rent overdue";

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>Rental</h5>
      </div>
      <div className="ibox-content">
        <RentalDonut />
        <InfoCardItem  title={title} body={body} />
      </div>
    </div>
  );
};

export default DashRentalGraph;
