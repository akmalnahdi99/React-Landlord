
import React from "react";
import Empty from "../components/Empty";
import ConditionItem from "./ConditionItem";



const CommonBath2ConditionDetails = () => {
  var data =  [
  {
      id: 0,
      date: "28 Oct 2020",
      images: [
        {
          urlThumb: "/imgs/btha1.jpg",
          urlHref: "/imgs/btha1.jpg",
        },
        {
          urlThumb: "/imgs/btha2.jpg",
          urlHref: "/imgs/btha2.jpg",
        },
        {
          urlThumb: "/imgs/btha3.jpg",
          urlHref: "/imgs/btha3.jpg",
        },
      ],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    }
];

  return (
    <div className="ibox">
                {data.length > 0 ? (
                    data.map((item, index) => {
                    return <ConditionItem key={index} {...item} />;
                    })
                ) : (
                    <Empty />
                )}
    </div>
  );
};

export default CommonBath2ConditionDetails;
