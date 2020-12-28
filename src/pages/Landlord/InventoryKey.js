import React from "react";


import InventoryKeyTable from "../../components/InventoryKeyTable";

export default function Key() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="container-fluid">
          <div className="row m-t-sm justify-content-center">
            <div className="col-lg-9">
              <div className="ibox">
                <div className="ibox-title">
                  <h3>Keys</h3>
                  <hr />
                  <InventoryKeyTable title="Keys" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
