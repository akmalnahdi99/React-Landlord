import React from "react";
import Empty from "../components/Empty";
import InventoryYardItem from "./InventoryYardItem";

const YardDetails = () => {
  var detail = [
    {
      id: 0,
      item: "Tea Table",
      no: "1",
      images: [
        {
          urlThumb: "/imgs/ya1.jpg",
          urlHref: "/imgs/ya1.jpg",
        },
        {
          urlThumb: "/imgs/ya2.jpg",
          urlHref: "/imgs/ya2.jpg",
        },
        {
          urlThumb: "/imgs/ya3.jpg",
          urlHref: "/imgs/ya3.jpg",
        },
      ],
      model: "HNK-500-TP",
    },
  ];

  return (
    <div className="ibox">
      {detail.length > 0 ? (
        detail.map((item, index) => {
          return <InventoryYardItem key={index} {...item} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default YardDetails;
