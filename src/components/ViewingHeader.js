import React from "react";
 

export default function NotificationList() {
  const stats = {
    past:12,
    today:25,
    future:15
  }
  return (
    <div className="viewing-header doorcase-bg minhigh text-white">
      <div className="row">
        <div className="col-4 border-right text-truncate">
          <small>Past 30 days</small>
          <h2 className="font-bold m-t block">{stats.past}</h2>
        </div>
        <br />
        <div className="col-4 border-right text-truncate">
          <small>Today</small>
          <h2 className="font-bold m-t block">{stats.today}</h2>
        </div>
        <br />
        <div className="col-4 text-truncate">
          <small>Future</small>
          <h2 className="font-bold m-t block">{stats.future}</h2>
        </div>
      </div>
    </div>
  );
}
