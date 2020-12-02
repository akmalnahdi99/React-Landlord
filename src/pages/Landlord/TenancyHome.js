//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function PropertyInfo() {
  return (
    <div class="container container-xs pt-5 pb-5 gray-bg">
      <div class="row text-center">
        <div class="col-12 align-self-center mt-4">
          <Link to="/landlord/CheckInCheckOut" class="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/completed-task.svg" width="30px" alt="" />
            <br />
            <span class="mt-5 ">Check In &amp; Check Out</span>
          </Link>
          <Link to="/landlord/TenantTenancy" class="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/family.svg" width="30px" alt="" />
            <br />
            <span class="mt-5">Tenant &amp; Tenancy</span>
          </Link>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12 align-self-center">
          <Link to="/landlord/InventoryList" class="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/inventory.svg" width="30px" alt="" />
            <br />
            <span class="mt-5">Inventory List</span>
          </Link>
          <Link to="property-conditions.html" class="btn btn-dashboardicon  btn-default width190 btn-lg m-2">
            <img src="/imgs/room.svg" width="30px" alt="" />
            <br />
            <span class="mt-5">Property Condition</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
