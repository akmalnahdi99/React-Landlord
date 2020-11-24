import React from "react";
import Empty from "./Empty";
//TASK Complete the data object
export default function OfferDetailsList() {
    const data = {
      condoName: "Pavilion Residence",
      tenantName: "Zhang Lei",
    };
  return (
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="container container-xs">
        <div class="ibox">
          <div class="ibox-title minhigh">
            <h3>Offer Details</h3>
          </div>
          <div class="ibox-content-viewing border-bottom minhigh">
            <div class="row">
              <div class="col-sm-6 pb-2">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3 mt-0">
                      <strong>Listing ID: 123edxe</strong>
                    </h4>
                    <p class="m-0">Applied date: 29-09-2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pt-4">
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body ">
                    <p>{data.condoName}</p>
                    <p class="m-0">C308</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibox-content-viewing">
            <div class="row">
              <div class="col-sm-12">
                <div class="media">
                  <img class="align-self-center mr-3" src="/imgs/avatar.svg" width="100px" alt="Generic placeholder image" />
                  <div class="media-body align-self-center">
                    <h2 class="mt-0">{data.tenantName}</h2>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="ibox-content">
            <div class="row">
              <div class="col-sm-6 ">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Nationality</h4>
                    <p class="m-0">Nationality</p>
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Total occupants</h4>
                    <p class="m-0">XXX</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Gender</h4>
                    <p class="m-0">Gender</p>
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Move in date</h4>
                    <p class="m-0">Move in date</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Age</h4>
                    <p class="m-0">Age</p>
                  </div>
                </div>
                <hr />
              </div>
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Duration of tenancy</h4>
                    <p class="m-0">Duration of tenancy</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Occupation</h4>
                    <p class="m-0">XXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibox-content-viewing border-top">
            <div class="row">
              <div class="col-sm-3 ">
                <div class="media">
                  <div class="media-body">
                    <h4 class="text-doorcase3">Attending agent name</h4>
                    <p class="m-0">Attending agent name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ibox-content-viewing border-top minhigh">
            <div class="row">
              <div class="container">
                <div class="row mt-0 text-center">
                  <div class="col-sm-3">
                    <div class="media">
                      <div class="media-body">
                        <h4 class="text-doorcase3">Status</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-9 text-center">
                    <a class="btn btn-primary btn-full " href="#">
                      Accept Offer
                    </a>
                    <a class="btn btn-warning btn-full" href="#">
                      Renegociate Offer
                    </a>
                    <a class="btn btn-success btn-full" href="#">
                      Reject Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 