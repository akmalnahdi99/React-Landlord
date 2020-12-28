import React from "react";



import ViewingDetails from "../../components/ViewingDetails";

export default function Viewings() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5">
      <div className="container container-xs pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <ViewingDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
