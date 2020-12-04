/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryItem from "./InventoryItem";

const InventoryEntranceAreaDetails = () => {
  var drawer =  [
  {
      id: 0,
      date: "Pendant",
      no: "3",
      images: [
        {
          urlThumb: "/imgs/pendant1.jpg",
          urlHref: "/imgs/pendant1.jpg",
        },
        {
          urlThumb: "/imgs/pendant2.jpg",
          urlHref: "/imgs/pendant2.jpg",
        },
        {
          urlThumb: "/imgs/pendant3.jpg",
          urlHref: "/imgs/pendant3.jpg",
        },
      ],
      description: "BFG-3300",
    }
];
var table =  [
    {
        id: 0,
        date: "Shelf",
        no: "10",
        images: [
          {
            urlThumb: "/imgs/shelf1.jpg",
            urlHref: "/imgs/shelf1.jpg",
          },
          {
            urlThumb: "/imgs/shelf2.jpg",
            urlHref: "/imgs/shelf2.jpg",
          },
          {
            urlThumb: "/imgs/shelf3.jpg",
            urlHref: "/imgs/shelf3.jpg",
          },
        ],
        description: "BFG-3300",
      }
  ];

  return (
    <div>
                {drawer.length > 0 ? (
                    drawer.map((item, index) => {
                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}
                {table.length > 0 ? (
                    table.map((item, index) => {
                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}

    </div>        


  );
};

export default InventoryEntranceAreaDetails;