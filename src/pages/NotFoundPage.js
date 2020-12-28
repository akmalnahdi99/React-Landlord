import React from "react";
import { useLocation } from "react-router";

export default function NotFoundPage  ()  {
  var t = useLocation();
  console.log("Not found page.................................", t);
  return (
    <div>
      <p  style={{border:"2px solid black"}}  >Not found</p>
    </div>
  );
};
