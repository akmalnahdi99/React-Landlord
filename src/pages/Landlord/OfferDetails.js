//TASK under Review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import OfferDetailsCard from "../../components/OfferDetailsCard";
import { useParams } from "react-router-dom";


export default function OffersDetails() {
  var t = useParams();
  var offerId = t.offerId;
  
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
              <SiteMap title="Offer Details" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5 ">
        <div className="container container-xs pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
              <OfferDetailsCard offerId={offerId} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
