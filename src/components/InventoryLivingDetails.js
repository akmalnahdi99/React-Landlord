/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryLivingItem from "./InventoryLivingItem";

const KitchenDetails = () => {
  var detail =  [
  {
      id: 0,
      item: "Tea Table",
      no: "2",
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
      model: "HNK-500-TP",
    }
];

  return (
    <div className="ibox">
                {detail.length > 0 ? (
                    detail.map((item, index) => {
                    return <InventoryLivingItem key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
                
                
    </div>
    
  );
};

export default KitchenDetails;
