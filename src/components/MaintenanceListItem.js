//TASK under Review
import React from "react";
import { Link } from "react-router-dom";


export default function MaintenanceListItem({id, date, name, applydate, images, status, media }) {
  if (!status) {
    status = "new";
  }

  var statusClassName = "text-completedtask";
  var statusText = "New";
 
  if (status.toLowerCase() === "resolved") {
    statusClassName = "text-completedtask";
    statusText = "Resolved";
  } else if (status.toLowerCase() === "inprogress") {
    statusClassName = "text-pendingtask";
    statusText = "In Progress";
  } else if (status.toLowerCase() === "new") {
    statusClassName = "text-completedtask";
    statusText = "New";
  }

  var latest = "fas fa-video";
  var latesttext = "video";
 
  if (media === "image") {
    latest = "fas fa-images";
    latesttext = "Image";
  } else if (status.toLowerCase() === "video") {
    latest = "fas fa-video";
    latesttext = "Video";
  }

  return (
    <div className="row">
      <div className="col-2 date active pt-3 pl-0">
        <i className="fas fa-circle"></i>
        
        <br />
      </div>
      <div className="col-10 content pb-5">
        <Link to={"/landlord/maintenancedetails/"+ id} style={{color: "#000"}}>
      <p style={{fontSize: "12px"}}>{date}</p>
        <div className="row">
          <div className="col-9 mb-2">
            <div className="media">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt="Generic placeholder" />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-0">{name}</h5>
              </div>
            </div>
          </div>
          <div className="col-3 text-right">
            <Link to={"/landlord/maintenancedetails/"+ id} alt="">
                  <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-1">
            <h4 className="m-0">
              <span className="font-light font-body">Status:</span>
              <span className={"ml-2 font-body " + statusClassName}>{statusText}</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-1">
            <span className="font-body">Applied date</span>
            <p className="font-body mb-0">
              <strong>{applydate}</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span style={{fontSize: "12px"}}><i class={latest}></i> {latesttext}</span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
