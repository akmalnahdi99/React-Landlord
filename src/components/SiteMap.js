import React   from "react";
import { Link, useHistory } from "react-router-dom";
export default function SiteMap({title}) {
   const history = useHistory(); 

  return (
    <ol className="breadcrumb bg-transparent mt-3">
      <li className="mr-3">
        <Link onClick={()=>history.goBack()} className="" to="">
          <i className="fas fa-chevron-left"></i>
        </Link>
      </li>
      <li className="breadcrumb-item active">{title}</li>
    </ol>
  );
}
