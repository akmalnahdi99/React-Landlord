import React from "react";
import Empty from "./Empty";
import NotificationItem from "./NotificationItem";

const NotificationList = () => {
  var notificatins = [
    {
      id: 0,
      date: "2 days ago",
      time: "5:51pm",
      title: "notification aboux",
      body: "notification body",
    },
    {
      id: 1,
      date: "2 days ago",
      time: "5:51pm",
      title: "notification aboux",
      body: "notification body",
    },
    {
      id: 2,
      date: "2 days ago",
      time: "5:51pm",
      title: "notification aboux",
      body: "notification body",
    },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Notifications</h3>
        <hr />
      </div>
      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            <ul className="sortable-list connectList agile-list ui-sortable">
              {notificatins.length > 0 ? (
                notificatins.map((item) => {
                  return <NotificationItem key={item.id} {...item} />;
                })
              ) : (
                <Empty />
              )}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
