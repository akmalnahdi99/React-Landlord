//under review
import React from "react";
import TodoListDetails from "../../components/TodoListDetails";




const TodoList = () => {
  return (
    <div className="wrapper wrapper-content animated fadeInRight gray-bg">
      <div className="container container-xs">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-3">
            <TodoListDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
