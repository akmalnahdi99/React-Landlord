/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryUtilityItem from "./InventoryUtilityItem";

const UtilityDetails = () => {
  var detail =  [
  {
      id: 0,
      date: "28 Oct 2020",
      no: "1",
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    }
];

  return (
    <div className="ibox">
                {detail.length > 0 ? (
                    detail.map((item, index) => {
                    return <InventoryUtilityItem key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
                
                
    </div>
    
  );
};

export default UtilityDetails;
