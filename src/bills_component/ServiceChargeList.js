//under review
import React from "react";
import Empty from "./Empty";
import ServiceChargeItem from "./ServiceChargeItem";

export default function ServiceChargeList({t}) {
  var serviceCharge_sinkingfund = [
    {
      id: 0,
      servicecharge: "RM 0.00",
      namepayable: "Raine, Horne & Zaki Property Management Sdn Bhd",
      bankname: "Maybank",
      sinkingfund: "RM 0.00",
      contact: "+603 123 456",
      bankaccount: "123456789012",
    },

  ];

  var invoice = [
    {
      id: 1,
      date: "13/09/2020",
      title: "Service Charge",
      status: "OverDue",
    },
    {
      id: 2,
      date: "13/09/2020",
      title: "Service Charge",
      status: "Paid",
      },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h4>Service Charge &amp; Sinking Fund</h4>
      </div>
      <div className="ibox-content forum-container">
        
        {serviceCharge_sinkingfund.length > 0 ? (
          serviceCharge_sinkingfund.map((item) => {
            return <ServiceChargeItem key={item.id} {...item} />;
          })
        ) : (
          <Empty />
        )}
      </div>

      <div className="ibox">
      <div className="ibox-title">
        <h4>Invoice</h4>
      </div>
      <div className="ibox-content forum-container">
        {invoice.length > 0 ? (
          invoice.map((item) => {
            return <ServiceChargeItem key={item.id} {...item} />;
          })
        ) : (
          <Empty />
        )}
      </div>
      </div>
    </div>
  );
}
