import React, { Component } from "react";

export default class TodoHeader extends Component {
  render() {
    const doneTodo = this.props.doneTodo;
    const allTodo = this.props.allTodo;
    return (
      <>
        <div className="Header">
          <div className="d-flex justify-content-between">
            <h3>Todo list</h3>
            <h4>
              {allTodo} more todo {doneTodo} done
            </h4>
          </div>
        </div>
      </>
    );
  }
}
