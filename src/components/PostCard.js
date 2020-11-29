import React from "react";
import Gallery from "./ImageGallery";

const PostCard = (props) => {
  const { postIcon, postDateTime, postTitle, postBody, images } = { ...props };

  var imageGallery = null;
  if (images != null) {
    imageGallery = images.map((image, index) => {
      return (
        <li key={index}>
          {/* <Link to={image.urlThumb}>
            <img className="img-responsive" src={image.urlHref} alt="post som" />
            
          </Link> */}
          <Gallery />
        </li>
      );
    });
  }

  return (
    <div className="vertical-timeline-block filterDiv rental" data-name="all, rental">
      <div className="vertical-timeline-icon white-bg">
        <img src={postIcon} width="30px" alt={postTitle} />
      </div>
      <div className="vertical-timeline-content">
        <small className="datetime">
          <i className="fas fa-bell"></i>
          {postDateTime}
        </small>
        <hr className="my-2" />

        <h3 className="font-normal my-1">{postTitle}</h3>
        <p className="mt-0">{postBody}</p>
        <div className="demo-gallery">
          <ul id="lightgallery" className="list-unstyled">
            {imageGallery}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
