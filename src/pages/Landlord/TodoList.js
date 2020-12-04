//under review
import React from 'react'
import TodoListDetails from "../../components/TodoListDetails";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/static/Footer";

const TodoList = () => {
    return (
        <div id="page-wrapper" className="bg-white" style={{ border: "0px solid red" }}>
      <div className="border-bottom white-bg">
        <div className="container-fluid">
          <Header />
        </div>
      </div>

      <div className="wrapper border-bottom page-heading bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <SiteMap title="To-do List" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight gray-bg">
        <div className="container container-xs">
          <TodoListDetails />
        </div>
      </div>

      <Footer />
    </div>
    )
}

export default TodoList
