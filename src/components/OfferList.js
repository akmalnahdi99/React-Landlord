import React from "react";
import Empty from "./Empty";
import OfferListItem from "./OfferListItem";

const OfferList = () => {
  //TASK use status instead of color
  var data = [
    {
      id: 0,
      date: "Oct 23",
      name: "Tenant name",
      color: "green",
      payment: "not received",
    },
    {
      id: 1,
      name: "Tenant name",
      color: "blue",
    },
    {
      id: 2,
      name: "Tenant Name",
      color: "blue",
    },
    {
      id: 3,
      date: "Oct 19",
      name: "Tenant Name",
      color: "yellow",
    },
    {
      id: 4,
      name: "Tenant Name",
      color: "yellow",
    },
    {
      id: 5,
      name: "Tenant Name",
      color: "yellow",
    },
  ];

  return (
    <div class="ibox">
      <div class="ibox-content paddingtop minhigh">
        <div class="viewing-timeline">
          {data.length > 0 ? (
            data.map((item, index) => {
              return <OfferListItem key={index} {...item} />;
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferList;
