//TASK under Review
import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";

export default function BuildingFacilitiesCard() {
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
    <div className="ibox col-12">
      <div className="ibox-title">
        <h3>Faciities &amp; Amenities</h3>
      </div>

      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="row mb-5">
            <div className="col-md-4 p-0 col-12">
              <ul className="folder-list">
                <li className={"py-3" + inBuildingFacilities("24hoursSecurity")}>
                  <i className="fas fa-door-open"></i> 24 hours security
                </li>

                <li className={"py-3" + inBuildingFacilities("BbqArea")}>
                  <i className="fas fa-utensils"></i> Barbeque area
                </li>

                <li className={"py-3" + inBuildingFacilities("ChangingRoom")}>
                  <i className="fas fa-mitten"></i> Changing room
                </li>

                <li className={"py-3" + inBuildingFacilities("ChildrenPlayground")}>
                  <i className="fas fa-border-style"></i> Children's playground
                </li>

                <li className={"py-3" + inBuildingFacilities("CoveredCarPark")}>
                  <i className="fas fa-toilet-paper"></i> Covered car park
                </li>

                <li className={"py-3" + inBuildingFacilities("FunctionHall")}>
                  <i className="fas fa-toilet-paper"></i> Function hall
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-0 col-12">
              <ul className="folder-list">
                <li className={"py-3" + inBuildingFacilities("PerimeterFencing")}>
                  <i className="fas fa-seedling"></i> Perimeter Fencing
                </li>

                <li className={"py-3" + inBuildingFacilities("GamesRoom")}>
                  <i className="fas fa-couch"></i> Games room
                </li>

                <li className={"py-3" + inBuildingFacilities("Gymnasium")}>
                  <i className="fas fa-bed"></i> Gymnasium
                </li>

                <li className={"py-3" + inBuildingFacilities("InfinityPool")}>
                  <i className="fas fa-shower"></i> Infinity pool
                </li>

                <li className={"py-3" + inBuildingFacilities("LandscapedGarden")}>
                  <i className="fas fa-bed"></i> Landscaped garden
                </li>

                <li className={"py-3" + inBuildingFacilities("WadingPool")}>
                  <i className="fas fa-bed"></i> Wading pool
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-0 col-12">
              <ul className="folder-list">
                <li className={"py-3" + inBuildingFacilities("LapPool")}>
                  <i className="fas fa-bath"></i> Lap pool
                </li>

                <li className={"py-3" + inBuildingFacilities("LoungeArea")}>
                  <i className="fas fa-bed"></i> Lounge area
                </li>

                <li className={"py-3" + inBuildingFacilities("QigongYogaArea")}>
                  <i className="fas fa-dungeon"></i> Qigong / Yoga area
                </li>

                <li className={"py-3" + inBuildingFacilities("ReflexologyPath")}>
                  <i className="fas fa-infinity"></i> Reflexology path
                </li>

                <li className={"py-3" + inBuildingFacilities("SaunaAndSteam")}>
                  <i className="fas fa-infinity"></i> Sauna and Steam
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
