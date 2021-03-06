import { AppContext } from "context/settings";
import React from "react";
import { Link } from "react-router-dom";
import { apiLoadData } from "utils/landlordHelper";
import EmptyDashboard from "./EmptyDashboard";
import InfoCardItem from "./InfoCardItem";
import Loading from "./static/Loading";

export default function DashTodoList() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [todoList, set_todoList] = React.useState([]);
  var appContext = React.useContext(AppContext);
  const activeUnitId = appContext.settings.activeUnitId;

  React.useEffect(() => {
    async function loadTodoList() {
      setIsLoading(true);

      var response = await apiLoadData("landlordTodoList", { activeUnitId });

      if (response && response.length > 0) {
        set_todoList(response.slice(0, 3));
      }
      setIsLoading(false);
    }
    loadTodoList();

    // eslint-disable-next-line
  }, [activeUnitId]);
  return (
    <div className="ibox illustrated2">
      <Link className="dash-link" to="/landlord/todolist">
        <div className="ibox-title dash-title">
          <h5>To-do List</h5>
          <div className="ibox-tools">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </Link>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {isLoading === true ? (
          <Loading />
        ) : (
          <React.Fragment>
            {todoList && todoList.length > 0 ? (
              todoList.map((item, index) => {
                return <InfoCardItem key={index} address="/landlord/todolist" {...item} />;
              })
            ) : (
              <EmptyDashboard title="You Have No Task To-do!" />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
