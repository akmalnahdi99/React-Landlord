//TASK under Review
import React from "react";

import BuildingFacilitiesCard from "./BuildingFacilitiesCard";
import BuildingManagementCard from "./BuildingManagementCard";

export default function InfoBuilding() {
  return (
    <React.Fragment>
      <BuildingFacilitiesCard />
      <BuildingManagementCard title="Building Management" />
    </React.Fragment>
  );
}
