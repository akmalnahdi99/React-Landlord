import React from "react";
import Empty from "./Empty";
import InfoCardItem from "./InfoCardItem";

export default function DashTodoList() {
  const data = [
    {
      title: "Due On: 10/28/2020",
      body: "Good stuff",
      color: "red",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Good stuff",
      color: "green",
    },
    {
      title: "Due On: 10/28/2020",
      body: "Rent overdue",
      color: "green",
    },
  ];
  return (
    <div className="ibox illustrated2">
      <div className="ibox-title bg-transparent">
        <h5>
          <a href="todolist.html">To-do List</a>
        </h5>
        <div className="ibox-tools">
          <a href="todolist.html">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="ibox-content bg-transparent">
        <ul className="sortable-list connectList agile-list ui-sortable"></ul>
        {data.length > 0 ? (
          data.map((item, index) => {
            return <InfoCardItem key={index} title={item.title} body={item.body} color={item.color} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
