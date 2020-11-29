//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function OfferDetailsList() {
  const data = {
    condoName: "Pavilion Residence",
    tenantName: "Zhang Lei",
    listingid: "123edxe",
    appy: "29-09-2020",
    nationality: "Malaysian",
    occupants: "2",
    gender: "Male",
    moveInDate: "12-28-2020",
    age: "32",
    agentName: "Mike",
    duration: "5 Years",
    occupation: "Doctor",
  };
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="container container-xs px-0">
        <div className="ibox">
          <div className="ibox-title minhigh">
            <h3>Offer Details</h3>
          </div>
          <div className="ibox-content-viewing border-bottom minhigh">
            <div className="row">
              <div className="col-sm-6 pb-2">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3 mt-0">
                      <strong>Listing ID: {data.listingid}</strong>
                    </h4>
                    <p className="m-0">Applied date: 29-09-2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body ">
                    <p>{data.condoName}</p>
                    <p className="m-0">C308</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox-content-viewing">
            <div className="row">
              <div className="col-sm-12">
                <div className="media">
                  <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="100px" alt="Generic placeholder" />
                  <div className="media-body align-self-center">
                    <h2 className="mt-0">{data.tenantName}</h2>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="ibox-content">
            <div className="row">
              <div className="col-sm-6 ">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Nationality</h4>
                    <p className="m-0">{data.nationality}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Total occupants</h4>
                    <p className="m-0">{data.occupants}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Gender</h4>
                    <p className="m-0">{data.gender}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Move in date</h4>
                    <p className="m-0">{data.moveInDate}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Age</h4>
                    <p className="m-0">{data.age}</p>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Duration of tenancy</h4>
                    <p className="m-0">{data.duration}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Occupation</h4>
                    <p className="m-0">{data.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox-content-viewing border-top">
            <div className="row">
              <div className="col-sm-3 ">
                <div className="media">
                  <div className="media-body">
                    <h4 className="text-doorcase3">Attending agent name</h4>
                    <p className="m-0">{data.agentName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ibox-content-viewing border-top minhigh">
            <div className="row">
              <div className="container pr-0">
                <div className="row mt-0 text-center">
                  <div className="col-sm-3">
                    <div className="media">
                      <div className="media-body">
                        <h4 className="text-doorcase3">Status</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-9 text-center pr-0 pl-1">
                    <Link className="btn btn-primary btn-full text-center ml-1" to="#">
                      Accept Offer
                    </Link>
                    <Link className="btn btn-warning btn-full text-center ml-1" to="#">
                      Renegociate Offer
                    </Link>
                    <Link className="btn btn-success btn-full text-center ml-1" to="#">
                      Reject Offer
                    </Link>
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