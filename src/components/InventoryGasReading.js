import React from "react";
import Empty from "../components/Empty";
import InventoryGasItem from "./InventoryGasItem";

const GasDetails = () => {
  var gas = [
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
      {gas.length > 0 ? (
        gas.map((item, index) => {
          return <InventoryGasItem key={index} {...item} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default GasDetails;
