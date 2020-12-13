import React from "react";
import { Link } from "react-router-dom";


export default function ConditionItem({item, model, images, no}) {
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

  return (
                        <div class="ibox-content minhigh">
                            <div class="row mb-4 pt-3">
                                <div class="col-md-12">
                                    <div class="media">
                                        <div class="media-body">
                                        <div class="col-2 float-right">
                                            <h4 class="text-doorcase3">Quantity</h4>
                                        <p class="m-0">{no}</p>
                                        </div>
                                            <h4 class="text-doorcase3">Item Name</h4>
                                            <p class="m-0">{item}</p>
                                            
                                            <hr/>
                                        </div>
                                    </div>
                                    </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="demo-gallery">
                                        <ul id="lightgallery" class="list-unstyled row">
                                            {imageGallery}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row mb-4">
                                <div class="col-md-12">
                                <div class="media">
                                    <div class="media-body">
                                        <h4 class="text-doorcase3">Model Number</h4>
                                        <p class="m-0">{model}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    
  );
}
