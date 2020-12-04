/* Need to add another array for 2nd item box*/

import React from "react";
import Empty from "../components/Empty";
import InventoryItem from "./InventoryItem";

const InventoryMBathDetails = () => {
  var ceilinglight =  [
  {
      id: 0,
      date: "Ceiling Light",
      no: "10",
      images: [
        {
          urlThumb: "/imgs/m-bath1.jpg",
          urlHref: "/imgs/m-bath1.jpg",
        },
        {
          urlThumb: "/imgs/m-bath2.jpg",
          urlHref: "/imgs/m-bath2.jpg",
        },
        {
          urlThumb: "/imgs/m-bath3.jpg",
          urlHref: "/imgs/m-bath3.jpg",
        },
      ],
      description: "BFG-3300",
    }
];
var tub =  [
    {
        id: 0,
        date: "Bath Tub",
        no: "10",
        images: [
          {
            urlThumb: "/imgs/m-bathtub1.jpg",
            urlHref: "/imgs/m-bathtub1.jpg",
          },
          {
            urlThumb: "/imgs/m-bathtub2.jpg",
            urlHref: "/imgs/m-bathtub2.jpg",
          },
          {
            urlThumb: "/imgs/m-bathtub3.jpg",
            urlHref: "/imgs/m-bathtub3.jpg",
          },
        ],
        description: "BFG-3300",
      }
  ];

  return (
    <div>
                {ceilinglight.length > 0 ? (
                    ceilinglight.map((item, index) => {

                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}
                {tub.length > 0 ? (
                    tub.map((item, index) => {
                    return <InventoryItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}

    </div>        


  );
};

export default InventoryMBathDetails;