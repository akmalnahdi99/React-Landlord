import React from "react";
import Footer from "../../components/static/Footer";
import NotificationList from "../../components/NotificationList";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";

export default function Notification() {
  // const { alert, hideAlert } = React.useContext(UserContext);
 
  return (
    <div id="page-wrapper" className="bg-white" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Notifications" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight gray-bg">
        <div className="container container-xs">
          <NotificationList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
