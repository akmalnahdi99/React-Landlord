import React from "react";
 
//import postIcon from "img/money-bag.svg";

const PostCard = (props) => {
  const { postIcon, postDateTime, postTitle, postBody, images } = { ...props };

  var imageGallery = null;
  if (images != null) {
    imageGallery = images.map((image) => {
      return (
        <li class="col-xs-6 col-sm-4 col-md-2 col-lg-2 p-2">
          <a href={image.urlThumb}>
            <img className="img-responsive" src={image.urlHref} alt="post som" />
          </a>
        </li>
      );
    });
  }

  return (
    <div className="vertical-timeline-block filterDiv rental" data-name="all, rental">
      <div className="vertical-timeline-icon white-bg">
        <img src={postIcon} width="30px" alt="posticon" />
      </div>
      <div className="vertical-timeline-content">
        <small className="datetime">
          <i className="fas fa-bell"></i>
          {postDateTime}
        </small>
        <hr className="my-2" />

        <h3 className="font-normal my-1">{postTitle}</h3>
        <p className="mt-0">{postBody}</p>
        <div class="demo-gallery">
          <ul id="lightgallery" class="list-unstyled row">
            {imageGallery}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
