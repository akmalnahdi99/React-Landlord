
import React from "react";
import Empty from "../components/Empty";
import ConditionItem from "./ConditionItem";



const EntranceConditionDetails = () => {
  var data =  [
  {
      id: 0,
      date: "28 Oct 2020",
      images: [
        {
          urlThumb: "/imgs/ea1.jpg",
          urlHref: "/imgs/ea1.jpg",
        },
        {
          urlThumb: "/imgs/ea2.jpg",
          urlHref: "/imgs/ea2.jpg",
        },
        {
          urlThumb: "/imgs/ea3.jpg",
          urlHref: "/imgs/ea3.jpg",
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

export default EntranceConditionDetails;
