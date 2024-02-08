import React, { Component } from "react";

export default class TodoHeader extends Component {
  render() {
    return (
      <>
        <div className="Header">
          <div className="d-flex justify-content-between">
            <h3>Todo list</h3>
            <h4>3 more todo 1 done</h4>
          </div>
        </div>
      </>
    );
  }
}
