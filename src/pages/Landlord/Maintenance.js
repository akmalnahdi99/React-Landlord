//TASK under Review
import React from "react";



import DividedHeader from "../../components/DividedHeader";
import MaintenanceList from "../../components/MaintenanceList";

export default function Maintenance() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  const headerData = [
    { name: "Past 30 days", value: 12 },
    { name: "Today", value: 12 },
    { name: "Future", value: 12 },
  ];

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5 px-0">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <DividedHeader data={headerData} />
            <MaintenanceList />
          </div>
        </div>
      </div>
    </div>
  );
}
