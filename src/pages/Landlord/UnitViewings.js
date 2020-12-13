import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import ViewingList from "../../components/ViewingList";
import DividedHeader from "../../components/DividedHeader";
 

export default function Viewings() {
 var Today = [
   {
     id: 0,
     date: "Oct.23",
     time: "19:06",
     name: "Tenant name",
     url: "/landlord/viewingDetails",
   },
   {
     id: 1,
     date: "Oct.23",
     time: "19:09",
     name: "Tenant name",
     url: "/landlord/viewingDetails",
   },
   {
     id: 2,
     date: "Oct.23",
     time: "19:16",
     name: "Dennis",
     url: "/landlord/viewingDetails",
   },
 ];

  var Past = [
    {
      id: 0,
      date: "Oct.23",
      time: "19:06",
      name: "Tenant name 2",
      url: "/landlord/viewingDetails",
    },
    {
      id: 1,
      date: "Oct.23",
      time: "19:09",
      name: "Tenant name 2",
      url: "/landlord/viewingDetails",
    },
    {
      id: 2,
      date: "Oct.23",
      time: "19:16",
      name: "Dennis 2",
      url: "/landlord/viewingDetails",
    },
  ];

    const headerData = [
      { name: "Past 30 days", value: 12 },
      { name: "Today", value: 12 },
      { name: "Future", value: 12 },
    ];

  return (
    <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="Viewings" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
        <div className="container pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-3 px-2 ">
              <div className="row">
                <div className="col-sm-12">
                  <DividedHeader data={headerData} />
                </div>
                <div className="col-sm-12 mt-4">
                <ViewingList title="Viewing Today" data={Today} />
          <ViewingList title="Past Viewing" data={Past} />
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
