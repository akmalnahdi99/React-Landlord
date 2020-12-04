import React from "react";
import { Link } from "react-router-dom";

function CheckInKitsList() {
  return (
    <div className="row text-center">
      <div className="col-12 align-self-center mt-4">
        <Link to="../landlord/checkinleaflet" className="btn btn-dashboardicon  btn-default width180 btn-lg m-2">
          <img src="/imgs/write-letter.svg" width="30px" alt="" />
          <br />
          <span>Information leaflet</span>
        </Link>
        <Link to="/landlord/inventorykey" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
          <img src="/imgs/key.svg" width="30px" alt="" />
          <br />
          <span>Keys</span>
        </Link>
        <Link to="/landlord/inventoryaccesscard" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
          <img src="/imgs/access.svg" width="30px" alt="" />
          <br />
          <span>Access Cards</span>
        </Link>
        <Link to="/landlord/inventoryremotecontrol" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
          <img src="/imgs/remote-control.svg" width="30px" alt="" />
          <br />
          <span>Remote Controls</span>
        </Link>
        <Link to="/landlord/inventoryvehicle" className="btn btn-dashboardicon  btn-default width160 btn-lg m-2">
          <img src="/imgs/car.svg" width="30px" alt="" />
          <br />
          <span>Vehicle Stickers</span>
        </Link>
      </div>
    </div>
  );
}

export default CheckInKitsList;
