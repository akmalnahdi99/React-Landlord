/*Need to align ibox and item.icon and text*/

import React from "react";



import InventoryRemoteControlTable from "../../components/InventoryRemoteControlTable";

export default function AccessCard() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
 
        
        <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container-fluid">
      <div className="row m-t-sm justify-content-center">
                        <div className="col-lg-9">
        <div className="ibox">
        <div className="ibox-title">
            <h3>Remote Control</h3><hr/>
            <InventoryRemoteControlTable title="Remote Control" />
            </div>
        </div>
        </div>
        </div>
        </div>
      </div>
       
 );
}
