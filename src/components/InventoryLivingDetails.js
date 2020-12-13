import React from "react";
import Empty from "../components/Empty";
import InventoryItem from "./InventoryItem";

const InventoryKitchenDetails = () => {
  var hood = [
    {
      id: 0,
      date: "Tea Table",
      no: "1",
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
      description: "BFG-3300",
    },
  ];
  var shelf = [
    {
      id: 0,
      date: "3 Seater Sofa",
      no: "10",
      images: [
        {
          urlThumb: "/imgs/sofa1.jpg",
          urlHref: "/imgs/sofa1.jpg",
        },
        {
          urlThumb: "/imgs/sofa2.jpg",
          urlHref: "/imgs/sofa2.jpg",
        },
        {
          urlThumb: "/imgs/sofa3.jpg",
          urlHref: "/imgs/sofa3.jpg",
        },
      ],
      description: "BFG-3300",
    },
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

/* Need to add another array for 2nd item box

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
*/
