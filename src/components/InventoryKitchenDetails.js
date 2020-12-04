/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryKitchenItem from "./InventoryKitchenItem";

const KitchenDetails = () => {
  var detail =  [
  {
      id: 0,
      item: "Kitchen Hood",
      no: "1",
      images: [
        {
          urlThumb: "/imgs/kitchen-hood1.jpg",
          urlHref: "/imgs/kitchen-hood1.jpg",
        },
        {
          urlThumb: "/imgs/kitchen-hood2.jpg",
          urlHref: "/imgs/kitchen-hood2.jpg",
        },
        {
          urlThumb: "/imgs/kitchen-hood3.jpg",
          urlHref: "/imgs/kitchen-hood3.jpg",
        },
      ],
      model: "PHP032871",
    }
];

  return (
    <div className="ibox">
                {detail.length > 0 ? (
                    detail.map((item, index) => {
                    return <InventoryKitchenItem key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
                
                
    </div>
    
  );
};

export default KitchenDetails;
