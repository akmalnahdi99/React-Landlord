/*Need to align ibox and item.icon and text*/

import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import InventoryRemoteControlTable from "../../components/InventoryRemoteControlTable";

export default function AccessCard() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
<div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
        <div className="border-bottom white-bg">
          <div className="container-fluid">
            <Header />
          </div>
        </div>
        <div className="wrapper border-bottom page-heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <SiteMap title="Remote Control" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container-fluid">
      <div class="row m-t-sm justify-content-center">
                        <div class="col-lg-9">
        <div class="ibox">
        <div class="ibox-title">
            <h3>Remote Control</h3><hr/>
            <InventoryRemoteControlTable title="Remote Control" />
            </div>
        </div>
        </div>
        </div>
        </div>
      </div>
        <Footer />
      </div>
 );
}
