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
          urlThumb: "/imgs/pendant1.jpg",
          urlHref: "/imgs/pendant1.jpg",
        },
        {
          urlThumb: "/imgs/pendant2.jpg",
          urlHref: "/imgs/pendant2.jpg",
        },
        {
          urlThumb: "/imgs/pendant3.jpg",
          urlHref: "/imgs/pendant3.jpg",
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
