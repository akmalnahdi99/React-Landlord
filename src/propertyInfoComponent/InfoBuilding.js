//TASK under Review
import React from "react";

import InfoFacilities from "../propertyInfoComponent/InfoFacilities";
import InfoPropertyManagement from "../propertyInfoComponent/InfoPropertyManagement";
import UnitDetailsCard from "./UnitDetailsCard";

export default function InfoBuilding() {
  return (
    <div>
      <UnitDetailsCard />

      <InfoFacilities />

      <InfoPropertyManagement title="Building Management" />
    </div>
  );
}
