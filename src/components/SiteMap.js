import React from "react";
import {  useHistory } from "react-router-dom";
export default function SiteMap({ title }) {
  const history = useHistory();

  return (
    <ul className="breadcrumb bg-transparent mt-3">
      <div
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
        style={{ color: "white", cursor: "pointer", padding: "4px 0px" }}
      >
        <div className="d-flex justify-content-start align-items-center">
          <i className="fas fa-chevron-left"></i>
          <i className="breadcrumb-item active ml-2 " style={{ color: "white" }}>
            {title}
          </i>
        </div>
      </div>
    </ul>
  );
}
