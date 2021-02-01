import React from "react";
import { AppContext } from "../context/settings";
import { CompanyServicesIcons } from "../utils/landlordHelper";
import Empty from "./Empty";
import PayableItem from "./PayableItem";

export default function PayablesList() {
  var appContext = React.useContext(AppContext);
  var financials = (appContext.settings && appContext.settings.unitFinancials) || [];

  var duePayments = [];
  var overDuePayments = [];
  var duePaymentsView = [];
  var overduePaymentsView = [];

  financials = (financials && financials["landlord"] && financials["landlord"]) || [];

  Object.keys(financials).forEach((paymentOf) => {
    var payables = financials[paymentOf];

    payables.forEach((element) => {
      var paymentData = element;
      paymentData.icon = (CompanyServicesIcons[paymentOf] && CompanyServicesIcons[paymentOf].img) || "";

      if (paymentData.status === "due") {
        duePayments.push(paymentData);
      } else if (paymentData.status === "overdue") {
        overDuePayments.push(paymentData);
      }
      duePaymentsView = duePayments.map((item, index) => {
        var link = "/landlord/bills/" + paymentOf;
        return <PayableItem key={index} {...item} date={item.paymentDue} amount={item.amountRequired} paymentOf={paymentOf} address={link} color="red" />;
      });
      overduePaymentsView = overDuePayments.map((item, index) => {
        var link = "/landlord/bills/" + paymentOf;
        return <PayableItem key={index} {...item} date={item.paymentDue} amount={item.amountRequired} paymentOf={paymentOf} address={link} color="red" />;
      });
    });
  });

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h3>Landlord Payables</h3>
      </div>
      <div className="ibox-content forum-container">
        <h4 className="text-doorcase3">Payment Overdue</h4>
        {overduePaymentsView.length > 0 ? overduePaymentsView : <Empty title="No payments found" />}
      </div>

      {/* Need to understand the payment cycle login (End of month, or start month) */}
      <div className="ibox-content forum-container">
        <h4 className="text-doorcase3">Payment Due</h4>
        {duePaymentsView.length > 0 ? duePaymentsView : <Empty title="No payments found" />}
      </div>
    </div>
  );
}
