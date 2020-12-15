import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const AccessCardTable = () => {
    const info = [
        {area: "Lift Access Card", quantity: "04"},
        {area: "Parking Access Card", quantity: "02"},
    ]

    const renderInfo = (table, index) => {
        return(
            <tr key={index}>
                <td>{table.area}</td>
                <td>{table.quantity}</td>
            </tr>
        )
    }

    return(
        <div className="ibox-content">
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-doorcase3">Area</th>
                    <th className="text-doorcase3">Quantity</th>
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

export default AccessCardTable;