//TASK under Review
import React from "react";
import { Link } from "react-router-dom";


export default function MaintenanceListItem({id, date, name, applydate, images, status }) {
  if (!status) {
    status = "new";
  }

  var imageGallery = null;
  if (images != null) {
    imageGallery = images.map((image, index) => {
      return (
        <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2 p-2" key={index}>
          <Link to={image.urlThumb}>
            <img className="img-responsive" src={image.urlHref} alt="post som" />
          </Link>
        </li>
      );
    });
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

  return (
    <div className="row">
      <div className="col-2 date active pt-3 pl-0">
        <i className="fas fa-circle"></i>
        {date}
        <br />
      </div>
      <div className="col-10 content pb-5">
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
          <div className="col-12">
            <h4>
              <span className="font-light font-body">Status:</span>
              <span className={"ml-2 font-body " + statusClassName}>{statusText}</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className="font-body">Applied date</span>
            <p className="font-body">
              <strong>{applydate}</strong>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="demo-gallery mb-0">
              <ul id="lightgallery" className="list-unstyled row">
                {imageGallery}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
