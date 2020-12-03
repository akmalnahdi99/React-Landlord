import React from "react";
import Empty from "../components/Empty";
import InventoryElectricityItem from "./InventoryElectricityItem";

const ElectricityDetails = () => {
  var electricity =  [
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
      description: "95732-7 kW/h",
    }
];

  return (
    <div className="ibox">
                {electricity.length > 0 ? (
                    electricity.map((item, index) => {
                    return <InventoryElectricityItem key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
                
    </div>
    
  );
};

export default ElectricityDetails;