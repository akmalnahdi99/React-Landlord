import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import Empty from "./Empty";

export default function InventoryAreasCard({ areas }) {
  return (
    <div className="ibox-content minhigh350px ">
      <ul className="folder-list">
        {areas && areas.length > 0 ? (
          areas.map((item, index) => {
            return (
              <li key={index}>
                <Link to={"/landlord/inventoryOf/" + item}>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <img src={item.image || ""} className="align-self-center mr-2" width="25px" alt={item.name} /> &nbsp; */}
                    {item} &nbsp;
                    <FaIcons.FaArrowRight className="float-right fa-xs" />
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <Empty title="No Items" />
        )}
      </ul>
    </div>
  );
}
