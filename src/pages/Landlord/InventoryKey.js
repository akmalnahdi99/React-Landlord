import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import InventoryKeyTable from "../../components/InventoryKeyTable";

export default function Key() {
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
                <SiteMap title="Keys" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container-fluid">
      <div className="row m-t-sm justify-content-center">
                        <div className="col-lg-9">
        <div className="ibox">
        <div className="ibox-title">
            <h3>Keys</h3><hr/>
            <InventoryKeyTable title="Keys" />
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