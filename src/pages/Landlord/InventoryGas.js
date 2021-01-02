import React from "react";
import { Redirect, useParams } from "react-router-dom";
 
export default function LivingCondition() {
  var t = useParams();
  var meterName = t.meterName;
  if (["Gas","Electricity","Water"].indexOf(meterName) === -1)
  {
    return <Redirect to="/landlord/InventoryList"/>
  }
  var data = {
    urlImage: "",
    reading: "",
  };

  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row m-t-sm justify-content-center">
          <div className="col-lg-9">
            <div className="ibox-content minhigh">
              <div className="row mb-4 pt-3">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="text-doorcase3">{meterName}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="demo-gallery">
                    <ul id="lightgallery" className="list-unstyled row">
                      <img src={data.urlImage} alt="..." />
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="media">
                    <div className="media-body">
                      <h4 className="text-doorcase3">Reading</h4>
                      <p className="m-0">{data.reading}</p>
                    </div>
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
