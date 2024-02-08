import React, { Component } from "react";
import "./TodoListitem.css";

export default class TodoListitem extends Component {
  render() {
    const deletee = this.props.delete;
    let clazz = "";
    if (this.props.imp) {
      clazz += " imp";
    }

    let clazzz = "";
    if (this.props.done) {
      clazzz += " done";
    }

    return (
      <>
        <span className="d-flex justify-content-between">
          <span
            onClick={this.props.spanBtn}
            className={`${clazzz} flex-grow-1 ${clazz}`}
          >
            {this.props.title}
          </span>
          <button className="btn btn-outline-danger" onClick={deletee}>
            <i className="bi bi-trash3"></i>
          </button>
          <button
            onClick={this.props.btnImp}
            className="btn btn-outline-warning"
          >
            <i className="bi bi-exclamation-circle"></i>
          </button>
        </span>
      </>
    );
  }
}
