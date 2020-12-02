//TASK under Review
import React from "react";
import { Link } from "react-router-dom";


export default function InfoPropertyDetailsItem({block, level, unit, furnishing, images, type, sqft, room, utilityroom, bath, carpark, carparkno, servicecharges, sinkingfund, insurance}) {
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
    <div className="ibox-content">
                            <div className="row">
                                <div className="col-sm-12 ">
                                    <div className="demo-gallery">
                                        <ul id="lightgallery" className="list-unstyled row">
                                            {imageGallery}
                                        </ul>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4 ">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Block</h4>
                                            <p className="m-0">{block}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Level</h4>
                                            <p className="m-0">{level}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Unit</h4>
                                            <p className="m-0">{unit}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Furnishing</h4>
                                            <p className="m-0">{furnishing}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Type</h4>
                                            <p className="m-0">{type}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Sqft.</h4>
                                            <p className="m-0">{sqft}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Room</h4>
                                            <p className="m-0">{room}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Utility room</h4>
                                            <p className="m-0">{utilityroom}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Bath</h4>
                                            <p className="m-0">{bath}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Car park</h4>
                                            <p className="m-0">{carpark}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Car park No</h4>
                                            <p className="m-0">{carparkno}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Service charges</h4>
                                            <p className="m-0">{servicecharges}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Sinking fund</h4>
                                            <p className="m-0">{sinkingfund}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-4">
                                    <div className="media">
                                        <div className="media-body">
                                            <h4 className="text-doorcase3">Insurance amount</h4>
                                            <p className="m-0">{insurance}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            

                        </div>
  );
}
