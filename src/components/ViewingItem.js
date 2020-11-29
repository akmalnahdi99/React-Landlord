import React from "react";
import { Link } from "react-router-dom";

export default function ViewingItem({ time, date, name,url }) {
  return (
    <div className="row">
      <div className="col-2 date active pt-3 pl-0">
        <i className="fas fa-circle text-darkblue"></i>
        {date}
        <br />
        <small className="text-navy">{time}</small>
      </div>
      <div className="col-10 content">
        <div className="row">
          <div className="col-9 mb-2">
            <div className="media">
              <img className="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt={name} />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-0">{name}</h5>
              </div>
            </div>
          </div>
          <div className="col-3 text-right">
            <Link className="btn font-body" to={url}>
              <i className="fas fa-arrow-right fa-lg text-completedtask"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
