import React from "react";
import { Link } from "react-router-dom";

export default function PayableItem({ date, title, amount, icon, color }) {
  var  colorClassName = "text-darkblue";
  if (color === "red") {
    colorClassName = "text-danger";
  }

  return (
    <div className="forum-item">
      <div className="row">
        <div className="col-8">
          <div className="forum-sub-title">
            <Link className="text-doorcase3" href="#">
              <img src={icon} width="30px" alt={title} />
              <span className="ml-2 text-doorcase3">{title}</span>
              <br />
              <small className={colorClassName}>Due - {date}</small>
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div className="forum-info">
            <span className="views-number">{amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
