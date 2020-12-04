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
          urlThumb: "/imgs/meter-r.jpg",
          urlHref: "/imgs/meter-r.jpg",
        },
        {
          urlThumb: "/imgs/meter-r.jpg",
          urlHref: "/imgs/meter-r.jpg",
        },
        {
          urlThumb: "/imgs/meter-r.jpg",
          urlHref: "/imgs/meter-r.jpg",
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