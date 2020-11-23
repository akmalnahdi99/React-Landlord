import React from "react";
import { Link } from "react-router-dom";

const DashFinancials = () => {
  const data = [
    {
      className: "fa fa-circle text-newtask",
      text: "Income",
    },
    {
      className: "fa fa-circle text-danger",
      text: "Expenses",
    },
    {
      className: "fa fa-circle text-completedtask",
      text: "Net",
    },
  ];
  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link top="/">Financials</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="ibox-content">
        <div className="row">
          <div className="col-12">
            <div id="ct-chart1" className="ct-perfect-fourth"></div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 text-center">
            {data.map((item, index) => {
              return (
                <div className="col-4 px-2">
                  <ul className="dashlist ">
                    <li className=" text-truncate">
                      <i className={item.className}></i>
                      {item.text}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFinancials;
