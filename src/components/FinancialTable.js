import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const FinancialTable = () => {
    const info = [
        {category: "Income", amount: " "},
        {category: "+ Apartment Rental", amount: "20000.00"},
        {category: "+ Parking Lot Rental", amount: "2000.00"},
        {category: "+ Storage Rental", amount: "3000.00"},
        {category: "Total Income", amount: "25000.00"},
        {category: "Expenses", amount: " "},
        {category: "- Service Charge", amount: "500.00"},
        {category: "- Sinking Fund", amount: "500.00"},
        {category: "- Assesment Fees", amount: "500.00"},
        {category: "- Quit Rent", amount: "500.00"},
        {category: "- Subscription Fees", amount: "2000.00"},
        {category: "- Maintenance", amount: "1000.00"},
        {category: "- Insurance", amount: "2000.00"},
        {category: "Total Expenses", amount: "7000.00"},
        {category: "Net Profit", amount: "18000.00"},
    ]

    const renderInfo = (table, index) => {
        return(
            <tr key={index}>
                <td>{table.category}</td>
                <td>{table.amount}</td>
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