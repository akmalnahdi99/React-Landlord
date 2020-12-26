import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import   { LoadingSmall } from "./static/Loading";

const FinancialTable = ({ isLoading, data }) => {
  function getLandlordValue(key) {
    if (isLoading === true) {
      return "...";
    }
 
    return  (data.landlord[key] && data.landlord[key].paidAmount) || 0;
  }

  function getTenantValue(key) {
    if (isLoading === true) {
      return "...";
    }
    return   (data.tenant[key] && data.tenant[key].paidAmount) || 0;
  }
  var totalExpenses = "...";
  var netProfit = "...";
  var totalIncome = "...";
  if (isLoading === false) {
    totalIncome = getTenantValue("Rental");
    totalExpenses =
      getLandlordValue("ServiceCharges") + getLandlordValue("SinkingFunds") + getLandlordValue("AssessmentRate") + getLandlordValue("QuitRent") + getLandlordValue("Subscription") + getLandlordValue("Maintenance") + getLandlordValue("Insurance");
    netProfit = totalIncome - totalExpenses;
  }
  const info = [
    { categorytotal: "Income", amount: " " },
    { category: "+ Apartment Rental", amount: "RM " + getTenantValue("Rental") },
    { category: "+ Parking Lot Rental", amount: "RM " + getTenantValue("Rental1") },
    { category: "+ Storage Rental", amount: "RM " + getTenantValue("Rental2") },
    { categorytotal: "Total Income", total: "RM " + totalIncome },
    { categorytotal: "Expenses", amount: " " },
    { category: "- Service Charge", amount: "RM " + getLandlordValue("ServiceCharges") },
    { category: "- Sinking Fund", amount: "RM " + getLandlordValue("SinkingFunds") },
    { category: "- Assesment Fees", amount: "RM " + getLandlordValue("AssessmentRate") },
    { category: "- Quit Rent", amount: "RM " + getLandlordValue("QuitRent") },
    { category: "- Subscription Fees", amount: "RM " + getLandlordValue("Subscription") },
    { category: "- Maintenance", amount: "RM " + getLandlordValue("Maintenance") },
    { category: "- Insurance", amount: "RM " + getLandlordValue("Insurance") },
    { categorytotal: "Total Expenses", total: "RM " + totalExpenses },
    { categorytotal: "Net Profit", total: "RM " + netProfit },
  ];

  const renderInfo = (table, index) => {
    return (
      <tr key={index}>
        <td>
          {table.category}
          <strong>{table.categorytotal}</strong>
        </td>
        <td>
          {isLoading === true ? (
            <LoadingSmall   />
          ) : (
            <React.Fragment>
              {table.amount}
              <strong>{table.total}</strong>
            </React.Fragment>
          )}
        </td>
      </tr>
    );
  };

  
  return (
    <div className="ibox-content forum-container">
      <br />

      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-doorcase3">Category</th>
            <th className="text-doorcase3">Amount</th>
          </tr>
        </thead>

        <tbody>{info.map(renderInfo)}</tbody>
      </ReactBootstrap.Table>
      <br />
    </div>
  );
};

export default FinancialTable;
