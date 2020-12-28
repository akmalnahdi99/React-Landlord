//TASK under Review
import React from "react";



import MaintenanceDetailsList from "../../components/MaintenanceDetailsList";
import MaintenanceTimeLine from "../../components/MaintenanceTimeLine";
// import { useParams } from "react-router-dom";

export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <MaintenanceDetailsList />

            <MaintenanceTimeLine />
          </div>
        </div>
      </div>
    </div>
  );
}
