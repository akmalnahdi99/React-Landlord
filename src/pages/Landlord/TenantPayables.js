//under review
import React from "react";
import TenantPayablesList from "../../components/TenantPayablesList";

 
export default  function TenantPayables  ()  {
  return (
    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-3 px-0">
            <TenantPayablesList />
          </div>
        </div>
      </div>
    </div>
  );
};
 