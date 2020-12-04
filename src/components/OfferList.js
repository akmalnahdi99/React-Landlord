//TASK under Review
import React from "react";
import Empty from "./Empty";
import OfferListItem from "./OfferListItem";

const OfferList = () => {
  var data = [
    {
      id: 0,
      date: "Oct 23",
      name: "Tenant name",
      status: "offer accepted",
      payment: "not received",
    },
    {
      id: 1,
      name: "Tenant name",
      status: "new",
    },
    {
      id: 2,
      name: "Tenant Name",
      status: "new",
    },
    {
      id: 3,
      date: "Oct 19",
      name: "Tenant Name",
      status: "rejected",
    },
    {
      id: 4,
      name: "Tenant Name",
      status: "rejected",
    },
    {
      id: 5,
      name: "Tenant Name",
      status: "rejected",
    },
  ];

  return (
    <div className="ibox mt-4">
      <div className="ibox-content paddingtop minhigh">
        <div className="viewing-timeline">
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
