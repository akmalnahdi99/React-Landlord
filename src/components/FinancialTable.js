import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const FinancialTable = () => {
    const info = [
        {categorytotal: "Income", amount: " "},
        {category: "+ Apartment Rental", amount: "2,0000.00"},
        {category: "+ Parking Lot Rental", amount: "2,000.00"},
        {category: "+ Storage Rental", amount: "3,000.00"},
        {categorytotal: "Total Income", total: "25,000.00"},
        {categorytotal: "Expenses", amount: " "},
        {category: "- Service Charge", amount: "500.00"},
        {category: "- Sinking Fund", amount: "500.00"},
        {category: "- Assesment Fees", amount: "500.00"},
        {category: "- Quit Rent", amount: "500.00"},
        {category: "- Subscription Fees", amount: "2000.00"},
        {category: "- Maintenance", amount: "1,000.00"},
        {category: "- Insurance", amount: "2,000.00"},
        {categorytotal: "Total Expenses", total: "7,000.00"},
        {categorytotal: "Net Profit", total: "18,000.00"},
    ]

    const renderInfo = (table, index) => {
        return(
            <tr key={index}>
                <td>{table.category}
                <strong>{table.categorytotal}</strong>
                </td>
                <td>{table.amount}
                <strong>{table.total}</strong>
                </td>
            </tr>
        )
    }

    return(

        <div class="ibox-content forum-container">
            <br/>
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-doorcase3">Category</th>
                    <th className="text-doorcase3">Amount</th>
                </tr>
            </thead>
            <tbody>
                {info.map(renderInfo)}
            </tbody>
        </ReactBootstrap.Table>
        <br/>
        </div>
    );
}

export default FinancialTable;