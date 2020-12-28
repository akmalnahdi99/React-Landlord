import React from "react";



import InventoryAreaFilter from "../../components/InventoryAreaFilter";
import InventoryEntranceAreaDetails from "../../components/InventoryEntranceAreaDetails";

export default function LivingCondition() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3">
            <div className="row p-0 justify-content-center">
              <div className="col-lg-8 px-2">
                <InventoryAreaFilter />
                <br />
              </div>
            </div>
            <div className="container container-xs">
              <InventoryEntranceAreaDetails />
            </div>
          </div>
        </div>
      </div>
 
  );
}
