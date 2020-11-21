import React from "react";
 

export default function UnitInfoCard() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  const Unit  = {
    urlThumbnail: "img/a4.jpg",
    CondoName: "Widuri Impian Condo",
    UnitName: "B-10-2",
  };

  return (
    <div class="media align-items-center" style={{cursor: 'pointer'}}>
      <img src={Unit.urlThumbnail} class="rounded-circle boxshadow align-self-center mr-3" width="70px" alt="" />
      <div class="media-body ">
        <h3 class="mt-0 mb-0 text-doorcase">{Unit.UnitName} </h3>
        <p class="m-0 text-doorcas">{Unit.CondoName}</p>
      </div>
    </div>
  );
}
