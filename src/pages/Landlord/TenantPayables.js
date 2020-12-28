//under review
import React from "react";
import TenantPayablesList from "../../components/TenantPayablesList";

 
const TenantPayables = () => {
  return (
    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <TenantPayablesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPayables;
