//PHONE OR COST
import React from "react";
import Gallery from "./ImageGallery";

export default function PostCard({ postIcon, postDate, title, body, images }) {
  return (
    <div className="vertical-timeline-block filterDiv rental" data-name="all, rental">
      <div className="vertical-timeline-icon white-bg">
        <img src={postIcon} width="30px" alt={title} />
      </div>
      <div className="vertical-timeline-content">
        <small className="datetime">
          <i className="fas fa-bell" style={{ marginRight: "7px" }}></i>
          {postDate} 
        </small>
        <hr className="my-2" />

        <h3 className="font-normal my-1">{title}</h3>
        <p className="mt-0">{body}</p>
        <div className="demo-gallery">
          <ul id="lightgallery" className="list-unstyled">
            <Gallery images={images} />
          </ul>
        </div>
      </div>
    </div>
  );
}
