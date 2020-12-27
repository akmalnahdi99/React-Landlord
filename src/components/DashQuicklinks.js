import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";
import { userQuickLinks } from "../utils/landlordHelper";

export default function Quicklinks({ title }) {
  var appContext = React.useContext(AppContext);
  var userPreferencesQuickLinks = (appContext.settings && appContext.settings.quickAccessList) || {};

  const [allQuickLinks, set_allQuickLinks] = React.useState(userQuickLinks);

  React.useEffect(() => {
    // eslint-disable-next-line
  }, [userPreferencesQuickLinks]);

  var datalist = [];

  datalist = Object.keys(userPreferencesQuickLinks).map((i) => {
    var value = userPreferencesQuickLinks[i];
    return value === null ? null : allQuickLinks[value];
  });

  console.log("datalist:", datalist);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/quicklinks">{title}</Link>
        </h5>
      </div>
      <div className="ibox-tools">
        <Link to="/quicklinks">
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="ibox-content pt-0">
        <div className="row text-center">
          {datalist.map((item, index) => {
            if (item) {
              return (
                <div key={index} className="col-md-4 col-sm-4 col-4 p-2">
                  <Link to="tenant-details.html" className="btn btn-default btn-dashboardicon btn-block text-truncate">
                    <img src={item.img} alt={item.label} width="24px" />
                    <br />
                    {item.label}
                  </Link>
                </div>
              );
            } else {
              return (
                <div className="col-md-4 col-sm-4 col-4 p-2">
                  <Link to={"/quicklinks/" + index} className="btn btn-shortcut btn-block text-truncate">
                    <i className={"fas fa-plus"}></i>
                    <br />
                    Add Shortcut
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
