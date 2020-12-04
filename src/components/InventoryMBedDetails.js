/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryItem from "./InventoryItem";

const InventoryMBedDetails = () => {
  var drawer =  [
  {
      id: 0,
      date: "Chest Drawer",
      no: "10",
      images: [
        {
          urlThumb: "/imgs/m-chestdrawer1.jpg",
          urlHref: "/imgs/m-chestdrawer1.jpg",
        },
        {
          urlThumb: "/imgs/m-chestdrawer2.jpg",
          urlHref: "/imgs/m-chestdrawer2.jpg",
        },
        {
          urlThumb: "/imgs/m-chestdrawer3.jpg",
          urlHref: "/imgs/m-chestdrawer1.jpg",
        },
      ],
      description: "BFG-3300",
    }
];
var table =  [
    {
        id: 0,
        date: "Table",
        no: "10",
        images: [
          {
            urlThumb: "/imgs/m-bedside1.jpg",
            urlHref: "/imgs/m-bedside1.jpg",
          },
          {
            urlThumb: "/imgs/m-bedside2.jpg",
            urlHref: "/imgs/m-bedside2.jpg",
          },
          {
            urlThumb: "/imgs/m-bedside3.jpg",
            urlHref: "/imgs/m-bedside3.jpg",
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

export default InventoryMBedDetails;