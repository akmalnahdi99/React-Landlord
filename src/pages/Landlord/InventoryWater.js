import React from "react";



import InventoryWaterReading from "../../components/InventoryWaterReading";

export default function LivingCondition() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
   

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container container-xs pb-5">
          <div className="row m-t-sm justify-content-center">
            <div className="col-lg-9">
              <InventoryWaterReading />
            </div>
          </div>
        </div>
      </div>
 
  );
}
