import React from "react";



import InventoryAreaFilter from "../../components/InventoryAreaFilter";
import InventoryBalconyDetails from "../../components/InventoryBalconyDetails";

export default function BalconyCondition() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 mb-3">
          <div className="row p-0 justify-content-center pb-0">
            <div className="col-lg-8 px-2">
              <InventoryAreaFilter />
              <br />
            </div>
          </div>
          <div className="container container-xs">
            <InventoryBalconyDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
