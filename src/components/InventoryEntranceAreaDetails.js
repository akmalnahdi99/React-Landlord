/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryEntranceAreaItem from "./InventoryEntranceAreaItem";

const EntranceDetails = () => {
  var detail = [
    {
      id: 0,
      date: "Pendant Light",
      no: "10",
      images: [
        {
          urlThumb: "/imgs/da1.jpg",
          urlHref: "/imgs/da1.jpg",
        },
        {
          urlThumb: "/imgs/da2.jpg",
          urlHref: "/imgs/da2.jpg",
        },
        {
          urlThumb: "/imgs/da3.jpg",
          urlHref: "/imgs/da3.jpg",
        },
      ],
      description: "BFG-3300",
    },
  ];

  return (
    <div className="ibox">
      {detail.length > 0 ? (
        detail.map((item, index) => {
          return <InventoryEntranceAreaItem key={index} {...item} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default EntranceDetails;
