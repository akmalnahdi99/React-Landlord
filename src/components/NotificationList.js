import React from "react";
// import { AppContext } from "../context/settings";
import Empty from "./Empty";
import NotificationItem from "./NotificationItem";
import Loading from "./static/Loading";
import { apiCall } from "./../utils/landlordHelper";

const NotificationList = () => {
  console.log("in notifications list");

  const [isLoading, setIsLoading] = React.useState(true);
  const [notifications, setNotifications] = React.useState(null);

  // const {
  //   updateAppContext,
  // } = React.useContext(AppContext);

  React.useEffect(() => {
    console.log("in effect");

    async function loadNotificationsWrapper() {
      setIsLoading(true);
      var response = await apiCall("/users/notifications");
      if (response.status) {
        setNotifications(response.data);
        setIsLoading(false);
      }
    }
    loadNotificationsWrapper();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Notifications </h3>
        <hr />
      </div>

      <div className="ibox-content minhigh">
        <div className="row">
          <div className="col-sm-12">
            {isLoading === true ? (
              <Loading />
            ) : (
              <ul className="sortable-list connectList agile-list ui-sortable">
                {notifications !== null && notifications.length > 0 ? (
                  notifications.map((item, index) => {
                    return <NotificationItem key={index} {...item} />;
                  })
                ) : (
                  <Empty />
                )}
              </ul>
            )}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
