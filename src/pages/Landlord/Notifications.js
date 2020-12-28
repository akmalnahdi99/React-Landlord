import React from "react";

import NotificationList from "../../components/NotificationList";
 


export default function Notification() {
  // const { alert, hideAlert } = React.useContext(UserContext);
 
  return (
    

      <div className="wrapper wrapper-content animated fadeInRight gray-bg">
        <div className="container container-xs">
          <NotificationList />
        </div>
      </div>
 
  );
}
