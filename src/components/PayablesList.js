import React from "react";
import Empty from "./Empty";
import PayableItem from "./PayableItem";

export default function PayablesList() {
  var overdue = [
    {
      id: 0,
      date: "20/02/2020",
      title: "Service Charge",
      amount: "RM XXXX",
      icon: "/imgs/money-bag.svg",
    },
    {
      id: 1,
      date: "15/03/2020",
      title: "Insurance",
      amount: "RM XXXX",
      icon: "/imgs/insurance.svg",
    },
    {
      id: 2,
      date: "17/02/2020",
      title: "Subscription Fees",
      amount: "RM XXXX",
      icon: "/imgs/subscription.svg",
    },
    {
      id: 3,
      date: "17/02/2020",
      title: "Maintenance",
      amount: "RM XXXX",
      icon: "/imgs/settings.svg",
    },
  ];

  var due = [
    {
      id: 1,
      date: "13/09/2020",
      title: "Sinking Fund",
      amount: "RM XXXX",
      icon: "/imgs/money-bag.svg",
    },
    {
      id: 2,
      date: "13/09/2020",
      title: "Quit Rent",
      amount: "RM XXXX",
      icon: "/imgs/quitrent.svg",
    },
  ];
 // code insert :  Process list to produce the right image for every payment type 
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Landlord Payables</h3>
      </div>
      <div className="ibox-content forum-container">
        <h4>Payment Overdue</h4>
        {overdue.length > 0 ? (
          overdue.map((item) => {
            return <PayableItem key={item.id} {...item} color="red" />;
          })
        ) : (
          <Empty />
        )}
      </div>
      <div className="ibox-content forum-container">
        <h4>Payment Due</h4>
        {due.length > 0 ? (
          due.map((item) => {
            return <PayableItem key={item.id} {...item} color="blue" />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
