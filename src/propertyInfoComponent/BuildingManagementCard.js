import React from "react";
import Loading from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall } from "../utils/landlordHelper";
 
export default function InfoPropertyManagement ({title})  {
 
   const [isLoading, setIsLoading] = React.useState(true);
   const [buildingManagement, setBuildingManagement] = React.useState(true);

   const appContext = React.useContext(AppContext);
   const activeUnitId = appContext.settings.activeUnitId;

   const allUnits = appContext.settings.userInfo.units || [];
   var buildingId = allUnits.filter((u) => u.id === activeUnitId)[0].buildingId || null;
 
   React.useEffect(() => {
     console.log("In Effect");
     async function loadBuildingManagementWrapper() {
       setIsLoading(true);
       var response = await apiCall("/buildings/managementCompany/" + buildingId);
       if (response.status) {
         setBuildingManagement(response.data); 
       }
       setIsLoading(false);
     }
     loadBuildingManagementWrapper();
     // eslint-disable-next-line
   }, [activeUnitId]);


  return (
    <div className="ibox ">
      <div className="ibox-title ">
        <h5>{title}</h5>
      </div>
      <div className="ibox-content">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="row text-left">
            <div className="col-6">
              <h5 className="font-bold text-completedtask ">Company Name</h5>
              <span className="mb-3 font-normal">{buildingManagement.companyName || "N/A"}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Building address</h5>
              <span className="mb-3 font-normal">{buildingManagement.address}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Contact number</h5>
              <span className="mb-3 font-normal">{buildingManagement.contactNumber}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Bank name</h5>
              <span className="mb-3 font-normal">{buildingManagement.bankName}</span>
              <hr />
            </div>
            <div className="col-6">
              <h5 className="font-bold text-completedtask ">Name payable</h5>
              <span className="mb-3 font-normal">{buildingManagement.namePayable}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Contact person</h5>
              <span className="mb-3 font-normal">{buildingManagement.contactPerson}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Email</h5>
              <span className="mb-3 font-normal">{buildingManagement.email}</span>
              <hr />
              <h5 className="font-bold text-completedtask ">Bank account number</h5>
              <span className="mb-3 font-normal">{buildingManagement.bankAccountNumber}</span>
              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
