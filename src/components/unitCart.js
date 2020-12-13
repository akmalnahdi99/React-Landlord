import React from "react";
import { Link } from "react-router-dom";

export default function UnitInfoCard() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  const Unit = {
    urlThumbnail: process.env.PUBLIC_URL + "/imgs/a4.jpg",
    CondoName: "Widuri Impian Condo",
    UnitName: "B-10-2",
  };

  return (
    <Link className="media align-items-center" style={{ cursor: "pointer" }} to="/landlord/propertyinfo/Unit">
      <img src={Unit.urlThumbnail} className="rounded-circle boxshadow align-self-center mr-3" width="70px" alt="" />
      <div className="media-body ">
        <h3 className="mt-0 mb-0 text-doorcase">{Unit.UnitName} </h3>
        <p className="m-0 text-doorcase">{Unit.CondoName}</p>
      </div>
    </Link>
  );
}
