import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const RemoteControlTable = () => {
    const info = [
        {area: "TV Remote", quantity: "01"},
        {area: "AC Remote", quantity: "03"},
        {area: "Fan Remote", quantity: "06"},
        {area: "Radio Remote", quantity: "01"},
        {area: "Play Station Remote", quantity: "01"},
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

export default RemoteControlTable;