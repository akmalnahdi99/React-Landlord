//TASK under Review
import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

const InfoPropertyDetails = () => {
  console.log("In Facilities");

  const [isLoading, setIsLoading] = React.useState(true);
  const [buildingFacilities, setBuildingFacilities] = React.useState(true);

  const appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  const allUnits = appContext.settings.userInfo.units || [];
  var buildingId = allUnits.filter((u) => u.id === activeUnitId)[0].buildingId || null;

  function inBuildingFacilities(facility) {
    if (buildingFacilities === null) return " facility-faint";

    return buildingFacilities.indexOf(facility) >= 0 ? " facility-dark" : " facility-faint";
  }

  React.useEffect(() => {
    console.log("In Effect");
    async function loadBuildingInfoWrapper() {
      setIsLoading(true);
      var response = await apiCall("/buildings/facilities/" + buildingId);
      if (response.status) {
        setBuildingFacilities(response.data);
        console.log(buildingFacilities);
      }
      setIsLoading(false);
    }
    loadBuildingInfoWrapper();
    // eslint-disable-next-line
  }, [activeUnitId]);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Faciities &amp; Amenities</h3>
      </div>

      <div class="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div class="row mb-5">
            <div class="col-md-4 p-0 col-12">
              <ul class="folder-list">
                <li class={"py-3" + inBuildingFacilities("24hoursSecurity")}>
                  <i class="fas fa-door-open"></i> 24 hours security
                </li>

                <li class={"py-3" + inBuildingFacilities("BbqArea")}>
                  <i class="fas fa-utensils"></i> Barbeque area
                </li>

                <li class={"py-3" + inBuildingFacilities("ChangingRoom")}>
                  <i class="fas fa-mitten"></i> Changing room
                </li>

                <li class={"py-3" + inBuildingFacilities("ChildrenPlayground")}>
                  <i class="fas fa-border-style"></i> Children's playground
                </li>

                <li class={"py-3" + inBuildingFacilities("CoveredCarPark")}>
                  <i class="fas fa-toilet-paper"></i> Covered car park
                </li>

                <li class={"py-3" + inBuildingFacilities("FunctionHall")}>
                  <i class="fas fa-toilet-paper"></i> Function hall
                </li>
              </ul>
            </div>
            <div class="col-md-4 p-0 col-12">
              <ul class="folder-list">
                <li class={"py-3" + inBuildingFacilities("PerimeterFencing")}>
                  <i class="fas fa-seedling"></i> Perimeter Fencing
                </li>

                <li class={"py-3" + inBuildingFacilities("GamesRoom")}>
                  <i class="fas fa-couch"></i> Games room
                </li>

                <li class={"py-3" + inBuildingFacilities("Gymnasium")}>
                  <i class="fas fa-bed"></i> Gymnasium
                </li>

                <li class={"py-3" + inBuildingFacilities("InfinityPool")}>
                  <i class="fas fa-shower"></i> Infinity pool
                </li>

                <li class={"py-3" + inBuildingFacilities("LandscapedGarden")}>
                  <i class="fas fa-bed"></i> Landscaped garden
                </li>

                <li class={"py-3" + inBuildingFacilities("WadingPool")}>
                  <i class="fas fa-bed"></i> Wading pool
                </li>
              </ul>
            </div>
            <div class="col-md-4 p-0 col-12">
              <ul class="folder-list">
                <li class={"py-3" + inBuildingFacilities("LapPool")}>
                  <i class="fas fa-bath"></i> Lap pool
                </li>

                <li class={"py-3" + inBuildingFacilities("LoungeArea")}>
                  <i class="fas fa-bed"></i> Lounge area
                </li>

                <li class={"py-3" + inBuildingFacilities("QigongYogaArea")}>
                  <i class="fas fa-dungeon"></i> Qigong / Yoga area
                </li>

                <li class={"py-3" + inBuildingFacilities("ReflexologyPath")}>
                  <i class="fas fa-infinity"></i> Reflexology path
                </li>

                <li class={"py-3" + inBuildingFacilities("SaunaAndSteam")}>
                  <i class="fas fa-infinity"></i> Sauna and Steam
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoPropertyDetails;
