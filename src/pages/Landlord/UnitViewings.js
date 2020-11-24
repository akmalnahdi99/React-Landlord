import React from "react";
// import { FaWindowClose } from "react-icons/fa";

import Footer from "../../components/static/Footer";

import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import ViewingHeader from "../../components/ViewingHeader";
import ViewingList from "../../components/ViewingList";
 

export default function Viewings() {
 var Today = [
   {
     id: 0,
     date: "Oct.23",
     time: "19:06",
     name: "Tenant name",
   },
   {
     id: 1,
     date: "Oct.23",
     time: "19:09",
     name: "Tenant name",
   },
   {
     id: 2,
     date: "Oct.23",
     time: "19:16",
     name: "Dennis",
   },
 ];

  var Past = [
    {
      id: 0,
      date: "Oct.23",
      time: "19:06",
      name: "Tenant name 2",
    },
    {
      id: 1,
      date: "Oct.23",
      time: "19:09",
      name: "Tenant name 2",
    },
    {
      id: 2,
      date: "Oct.23",
      time: "19:16",
      name: "Dennis 2",
    },
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
        <div className="container container-xs pb-5">
          <div className="row">
            <div className="col-lg-12 mb-3 px-2">
              <div className="row">
                <div className="col-sm-12">
                  <ViewingHeader />
                </div>
              </div>
            </div>
          </div>
          <ViewingList title="Viewing Today" data={Today} />
          <ViewingList title="Past Viewing" data={Past} />
        </div>
      </div> 
      <Footer /> 
    </div>
  );
}
