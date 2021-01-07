//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function OfferListItem({ id, offerDate, tenantName, urlThumb, status, isPaymentMade }) {
  var statusClassName = "text-completedtask";
  var statusText = "New";
  var paymentText = "Payment received";
  var paymentClassName = "text-completedtask";

  if (status.toLowerCase() === "accepted".toLowerCase() || status.toLowerCase() === "tempaccepted".toLowerCase()) {
    statusText = "Offer Accepted";
    statusClassName = "text-completedtask";
    if (isPaymentMade === true) {
      paymentText = "Payment received";
      paymentClassName = "text-completedtask";
    } else {
      paymentText = "Waiting for Payment";
      paymentClassName = "text-danger";
    }
  } else if (status.toLowerCase() === "rejected".toLowerCase()) {
    statusClassName = "text-pendingtask";
    statusText = "Rejected";
    paymentClassName = "menuburger";
  } else if (status.toLowerCase() === "new") {
    statusClassName = "text-completedtask";
    statusText = "New";
    paymentClassName = "menuburger";
  }
    else if (status.toLowerCase() === "negotiation") {
    statusClassName = "text-completedtask";
    statusText = "Negotiation";
    paymentClassName = "menuburger";
  }
  return (
    <div className="row">
      <div className="col-2 date active pt-3 pl-0 ">
        <i className="fas fa-circle"></i>
        {offerDate}
        <br />
      </div>
      <div className="col-10 content pb-5 ">
        <div className="row">
          <div className="col-10 mb-2 px-0">
            <div className="media">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt="Generic placeholder" />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-0">{tenantName}</h5>
                <span className={"font-body font-medium " + paymentClassName}>{paymentText}</span>
              </div>
            </div>
            <h4>
              <span className="font-light">Status:</span>
              <span className={"ml-2 font-body " + statusClassName}>{statusText}</span>
            </h4>
          </div>
          <div className="col-2 text-right">
            <Link to={"/landlord/offerdetails/" + id} alt="">
              <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
