import React from "react";
import { Link } from "react-router-dom";

export default function OfferListItem ({ date, name, color, payment }) {
  //TASK  too much code redundency please consider the file MaintenanceListItem.js
  if (!color) {
    color = "green";
  }

  if (color === "green") {
    if (payment === "received") {
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
                    <span class="text-completedtask font-body font-medium">Payment received</span>
                  </div>
                </div>
                <h4>
                  <span class="font-light">Status:</span>
                  <span class="text-completedtask ml-2">Offer Accepted</span>
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
    } else if (payment === "not received") {
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
                    <span class="text-danger font-body font-medium">Waiting for payment</span>
                  </div>
                </div>
                <h4>
                  <span class="font-light">Status:</span>
                  <span class="text-completedtask ml-2">Offer Accepted</span>
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
  } else if (color === "blue") {
    return (
      <div class="row">
        <div class="col-2 date active pt-3 pl-0 ">
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
                </div>
              </div>
              <h4>
                <span class="font-light">Status:</span>
                <span class="text-newtask ml-2">New</span>
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
  } else if (color === "yellow") {
    return (
      <div class="row">
        <div class="col-2 date active pt-3 pl-0 ">
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
                </div>
              </div>
              <h4>
                <span class="font-light">Status:</span>
                <span class="text-warning ml-2">Rejected</span>
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
}