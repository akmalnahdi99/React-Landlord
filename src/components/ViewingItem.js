import React from "react";
import { Link } from "react-router-dom";

export default function ViewingItem({ time, date, name,url }) {
  return (
    <div class="row">
      <div class="col-2 date active pt-3 pl-0">
        <i class="fas fa-circle text-darkblue"></i>
        {date}
        <br />
        <small class="text-navy">{time}</small>
      </div>
      <div class="col-10 content">
        <div class="row">
          <div class="col-9 mb-2">
            <div class="media">
              <img class="align-self-center mr-3" src="/imgs/avatar.svg" width="40px" alt={name} />
              <div class="media-body align-self-center">
                <h5 class="mt-0 mb-0">{name}</h5>
              </div>
            </div>
          </div>
          <div class="col-3 text-right">
            <Link class="btn font-body" to={url}>
              <i class="fas fa-arrow-right fa-lg text-completedtask"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
