import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const VehicleTable = () => {
    const info = [
        {area: "Vehicle Sticker - 1", quantity: "01"},
        {area: "Vehicle Sticker - 2", quantity: "01"},
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
        <div class="ibox-content">
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

export default VehicleTable;