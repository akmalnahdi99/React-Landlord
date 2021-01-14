import React from "react";



import LandLordDetailsCard from "../../components/LandLordDetailsCard";
import UserPhotoCard from "../../components/userPhotoCard";
import { AppContext } from "../../context/settings";

export default function Profile() {
  // const { alert, hideAlert } = React.useContext(UserContext);
  var {
    settings: { userInfo },
  } = React.useContext(AppContext);

  console.log(process);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row">
          <div className="col-md-4 mb-3 px-2">
            <UserPhotoCard {...userInfo}> <canUpload/></UserPhotoCard>
          </div>
          <div className="col-md-8 px-2">
            <LandLordDetailsCard title="Owner's Details" />
          </div>
        </div>
      </div>
    </div>
  );
}
