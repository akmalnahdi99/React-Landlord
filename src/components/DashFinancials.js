import React from "react";
import { Link } from "react-router-dom";
import FinancialChart from "../components/FinancialChart"

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
          <Link to="/landlord/financials">Financials</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/financials">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="ibox-content">
        <div className="row">
          <div className="col-12">
            <FinancialChart />
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 text-center">
            {data.map((item, index) => {
              return (
                <div className="col-4 px-2">
                  <ul className="dashlist">
                    <li className=" text-truncate">
                      <i className={item.className}></i>
                      <span className="ml-2">{item.text}</span>
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
