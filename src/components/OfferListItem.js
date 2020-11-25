//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function OfferListItem ({ date, name, status, payment }) {
  //TASK  too much code redundency please consider the file MaintenanceListItem.js (Done)
  if (!status) {
    status = "offer accepted";
  }
  var statusClassName = "text-completedtask";
  var statusText = "New";
  var paymentText = "Payment received";
  var paymentClassName = "text-completedtask"

  if (status.toLowerCase() === "offer accepted") {
    if (payment === "received") {
      statusClassName = "text-completedtask";
      statusText = "Offer Accepted";
      paymentText = "Payment received";
      paymentClassName = "text-completedtask"
    }
    else if (payment === "not received") {
      statusClassName = "text-completedtask";
      statusText = "Offer Accepted";
      paymentText = "Waiting for Payment";
      paymentClassName = "text-danger"
    }
  } else if (status.toLowerCase() === "rejected") {
    statusClassName = "text-pendingtask";
    statusText = "Rejected";
    paymentClassName = "menuburger"
  } else if (status.toLowerCase() === "new") {
    statusClassName = "text-completedtask";
    statusText = "New";
    paymentClassName = "menuburger"
  }
      return (
        <div class="row">
          <div class="col-2 date active pt-3 pl-0 ">
            <i class="fas fa-circle"></i>
            {date}
            <br />
          </div>
          <div class="col-10 content pb-5 ">
            <div class="row">
              <div class="col-10 mb-2 px-0">
                <div class="media">
                  <img class="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt="Generic placeholder image" />
                  <div class="media-body align-self-center">
                    <h5 class="mt-0 mb-0">{name}</h5>
                    <span class={"font-body font-medium " + paymentClassName}>{paymentText}</span>
                  </div>
                </div>
                <h4>
                  <span class="font-light">Status:</span>
                  <span class={"ml-2 font-body " + statusClassName}>{statusText}</span>
                </h4>
              </div>
              <div class="col-2 text-right px-2">
                <Link to="/landlord/offerdetails" alt="">
                  <i class="fas fa-arrow-right fa-lg text-completedtask"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}