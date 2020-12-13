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
          urlThumb: "/imgs/water-r.jpg",
          urlHref: "/imgs/water-r.jpg",
        },
        {
          urlThumb: "/imgs/water-r.jpg",
          urlHref: "/imgs/water-r.jpg",
        },
        {
          urlThumb: "/imgs/water-r.jpg",
          urlHref: "/imgs/water-r.jpg",
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
