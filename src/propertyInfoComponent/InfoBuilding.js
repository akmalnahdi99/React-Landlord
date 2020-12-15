//TASK under Review
import React from "react";

import BuildingFacilitiesCard from "../propertyInfoComponent/BuildingFacilitiesCard";
import BuildingManagementCard from "../propertyInfoComponent/BuildingManagementCard";
import UnitDetailsCard from "./UnitDetailsCard";

export default function InfoBuilding() {
  return (
    <div>
      <UnitDetailsCard />

      <BuildingFacilitiesCard />

      <BuildingManagementCard title="Building Management" />
    </div>
  );
}
