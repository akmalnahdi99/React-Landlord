import React from "react";
import Empty from "../components/Empty";
import InventoryItem from "./InventoryItem";

const InventoryKitchenDetails = () => {
  var hood =  [
  {
      id: 0,
      date: "Kitchen Hood",
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
      description: "BFG-3300",
    }
];
var shelf =  [
    {
        id: 0,
        date: "Shelf",
        no: "10",
        images: [
          {
            urlThumb: "/imgs/kitchen-shelf1.jpg",
            urlHref: "/imgs/kitchen-shelf1.jpg",
          },
          {
            urlThumb: "/imgs/kitchen-shelf2.jpg",
            urlHref: "/imgs/kitchen-shelf2.jpg",
          },
          {
            urlThumb: "/imgs/kitchen-shelf3.jpg",
            urlHref: "/imgs/kitchen-shelf3.jpg",
          },
        ],
        description: "BFG-3300",
      }
  ];

  return (
    <div>
                {hood.length > 0 ? (
                    hood.map((item, index) => {
                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}
                {shelf.length > 0 ? (
                    shelf.map((item, index) => {
                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}

    </div>        


  );
};

export default InventoryKitchenDetails;