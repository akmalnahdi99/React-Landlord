import React from "react";



import InventoryCBath3Details from "../../components/InventoryCBath3Details";
import ConditionFilter from "../../components/ConditionFilter";

export default function InventoryCBath3() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3">
            <div className="row p-0 justify-content-center pb-0">
              <div className="col-lg-8 px-2">
                <ConditionFilter />
                <br />
              </div>
            </div>
            <div className="container container-xs pb-5">
              <InventoryCBath3Details />
            </div>
          </div>
        </div>
      </div>
 
  );
}
