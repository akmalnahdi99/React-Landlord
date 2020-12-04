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
          urlThumb: "/imgs/tea-table1.jpg",
          urlHref: "/imgs/tea-table1.jpg",
        },
        {
          urlThumb: "/imgs/tea-table2.jpg",
          urlHref: "/imgs/tea-table2.jpg",
        },
        {
          urlThumb: "/imgs/tea-table3.jpg",
          urlHref: "/imgs/tea-table3.jpg",
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
