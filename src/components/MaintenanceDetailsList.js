//TASK under Review
import React from "react";
import { Link } from "react-router-dom";
import data from "./MaintenanceList";

export default function MaintenanceDetailsList({ id, name, images, status, applydate }) {
  console.log("inside mli", { id, name, applydate, images, status });
  return (
    <div className="ibox">
      <div className="ibox-content border mb-5 paddingtop">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="media">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt="Generic placeholder" />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-0">
                  <strong>{data.name}</strong>
                </h5>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="font-light font-body">Status:</span>
              <span className="ml-2 font-body Resolve">{data.status}</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="font-body">Applied date</span>
            <p className="font-body">
              <strong>{data.applydate}</strong>
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="demo-gallery mb-0">
              <ul id="lightgallery" className="list-unstyled row">
                <li
                  class="col-xl-3 col-sm-4 col-md-2 col-lg-2 p-2"
                  data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg"
                  data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg"
                >
                  <Link to="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
