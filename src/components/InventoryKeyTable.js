import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const KeyTable = () => {
    const info = [
        {area: "Entrance Door", quantity: "3"},
        {area: "Master Bedroom", quantity: "2"},
        {area: "Master Bath", quantity: "1"},
        {area: "Common Bedroom - 1", quantity: "2"},
        {area: "Common Bath - 1", quantity: "1"},
        {area: "Common Bedroom - 2", quantity: "1"},
        {area: "Common Bath - 2", quantity: "1"},
        {area: "Common Bedroom - 3", quantity: "1"},
        {area: "Common Bath - 3", quantity: "1"},
        {area: "Kitchen", quantity: "1"},
        {area: "Yard", quantity: "1"},
        {area: "Balcony", quantity: "1"},
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

export default KeyTable;