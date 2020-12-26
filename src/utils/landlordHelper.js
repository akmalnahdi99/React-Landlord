import { config } from "./../constants";
import Cookies from "js-cookie";

export const loadNotifications = async (accessToken) => {
  var { apiUrl } = config;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  var result = null;
  await fetch(apiUrl + "users/notifications", requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        result = await resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally((f) => {});

  return result;
};

export const apiCall = async (url) => {
  var jwtToken = Cookies.get("jwtToken") || null;
  var { apiUrl } = config;

  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (jwtToken) {
    headers.Authorization = `Bearer ${jwtToken}`;
  }

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  var apiResult = null;
  var result = { status: null, data: null };
  await fetch(apiUrl + url, requestOptions)
    .then(async (resp) => {
      if (resp.status === 200) {
        apiResult = await resp.json();
        result.status = true;
      } else {
        result.status = false;
        throw new Error(resp.statusText);
      }
    })
    .catch((error) => {
      console.error(`[API ERROR (${url})] ` + error);
    })
    .finally((f) => {});
  result.data = apiResult;
  return result;
};

export const role_tenant = "tenant";
export const role_landlord = "landlord";
// get financial value per month or per year
export function getFinancialValueRoot(financialData, financialMonth, userRole, paymentOf) {
  if (financialData) {
    if (financialMonth >= 1 && financialMonth <= 12) {
      if (userRole === role_landlord) return (financialData[financialMonth].landlord[paymentOf] && financialData[financialMonth].landlord[paymentOf].paidAmount) || 0;
      else if (userRole === role_tenant) return (financialData[financialMonth].tenant[paymentOf] && financialData[financialMonth].tenant[paymentOf].paidAmount) || 0;
    } else if (financialMonth === 0) {
      var accumulatedPerMonths = 0;
      for (let month = 1; month <= 12; month++) {
        const element = financialData[month];
        if (userRole === role_tenant) {
          accumulatedPerMonths += (element.tenant[paymentOf] && element.tenant[paymentOf].paidAmount) || 0;
        } else if (userRole === role_landlord) {
          accumulatedPerMonths += (element.landlord[paymentOf] && element.landlord[paymentOf].paidAmount) || 0;
        }
      }
      return accumulatedPerMonths;
    }
  }
  return 0;
}

// calculate Total Income, Total Expenses, Profit
export function calculate_3_financials_per_month(financialData, financialMonth) {
  var totalIncome = getFinancialValueRoot(financialData, financialMonth, role_tenant, "Rental");
  var totalExpenses =
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "ServiceCharges") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "SinkingFunds") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "AssessmentRate") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "QuitRent") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Subscription") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Maintenance") +
    getFinancialValueRoot(financialData, financialMonth, role_landlord, "Insurance");
  var netProfit = totalIncome - totalExpenses;
  return { totalIncome, totalExpenses, netProfit };
}
