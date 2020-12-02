//TASK under Review
import { render } from "node-sass";
import React from "react";
import Empty from "../components/Empty";
import InfoPropertyDetailsItems from "./InfoPropertyDetailsItems";



const InfoPropertyDetails = () => {
  var data = [
    {
      id: 0,
      images: [
        {
          urlThumb: "/imgs/b-1.jpg",
          urlHref: "/imgs/b-1.jpg",
        },
        {
          urlThumb: "/imgs/b-2.jpg",
          urlHref: "/imgs/b-2.jpg",
        },
        {
          urlThumb: "/imgs/b-3.jpg",
          urlHref: "/imgs/b-3.jpg",
        },
      ],
      block: "G",
      level: "21",
      unit: "07",
      furnishing: "Partially",
      type: "Service Residence",
      sqft: "1400",
      room: "3",
      utilityroom: "1",
      bath: "3",
      carpark: "1",
      carparkno: "B1-016",
      servicecharges: "RM 500.85",
      sinkingfund: "RM50.09",
      insurance: "RM308.63"
    },
  ];

  return (
    <div className="ibox">
        <div className="ibox-title">
            <h3>Details</h3>
        </div>
                {data.length > 0 ? (
                    data.map((item, index) => {
                    return <InfoPropertyDetailsItems key={index} {...item} />;
                    
                    })
                ) : (
                    <Empty />
                )}
    </div>
  );
};

export default InfoPropertyDetails;
