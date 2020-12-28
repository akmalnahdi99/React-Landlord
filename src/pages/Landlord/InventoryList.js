/*Need to align ibox and item.icon and text*/

import React from "react";



import InventoryItems from "../../components/InventoryItems";

export default function Inventory() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
 
        <div className="wrapper wrapper-content fadeInRight">
          <div className="container container-xs">

                <InventoryItems/>
          </div>
        </div>
 
 );
}