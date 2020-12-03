import React from "react";
import Empty from "../components/Empty";
import InventoryWaterItem from "./InventoryWaterItem";

const WaterDetails = () => {
  var water = [
    {
      id: 0,
      date: "",
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
      description: "3200 m³",
    },
  ];

  return (
    <div className="ibox">
      {water.length > 0 ? (
        water.map((item, index) => {
          return <InventoryWaterItem key={index} {...item} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default WaterDetails;
