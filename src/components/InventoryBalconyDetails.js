/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryBalconyItem from "./InventoryBalconyItem";

const BalconyDetails = () => {
  var detail =  [
  {
      id: 0,
      item: "Swing",
      no: "1",
      images: [
        {
          urlThumb: "/imgs/swing1.jpg",
          urlHref: "/imgs/swing1.jpg",
        },
        {
          urlThumb: "/imgs/swing2.jpg",
          urlHref: "/imgs/swing2.jpg",
        },
        {
          urlThumb: "/imgs/swing3.jpg",
          urlHref: "/imgs/swing3.jpg",
        },
      ],
      model: "HNK-500-TP",
    }
];

  return (
    <div className="ibox">
                {detail.length > 0 ? (
                    detail.map((item, index) => {
                    return <InventoryBalconyItem key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
                
                
    </div>
    
  );
};

export default BalconyDetails;
