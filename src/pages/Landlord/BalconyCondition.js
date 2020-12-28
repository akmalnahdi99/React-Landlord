import React from "react";



import BalconyConditionDetails from "../../components/BalconyConditionDetails";
import ConditionFilter from "../../components/ConditionFilter";

export default function YardCondition() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="row p-0 justify-content-center pb-0">
        <div className="col-lg-5 px-3 ">
          <ConditionFilter />
        </div>
      </div>
      <div className="container container-xs pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <BalconyConditionDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
