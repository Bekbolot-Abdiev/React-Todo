import React, { Component } from "react";

export default class TodoSearch extends Component {
  render() {
    return (
      <>
        <div className="search">
          <div className="d-flex">
            <input
              type="text"
              placeholder="search todo"
              className="form-control"
            />
            <button className="btn btn-info">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary">Done</button>
          </div>
        </div>
      </>
    );
  }
}
