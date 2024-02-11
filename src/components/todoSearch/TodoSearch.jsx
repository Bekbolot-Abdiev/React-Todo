import React, { Component } from "react";
export default class TodoSearch extends Component {
  btns = [
    { name: "all", title: "All" },
    { name: "active", title: "Active" },
    { name: "done", title: "Done" },
  ];
  render() {
    const buttons = this.btns.map((el) => {
      const active = this.props.filter === el.name;
      const clazz = active ? "btn-info" : " btn-outline-secondary";
      return (
        <button
          key={el.title}
          onClick={() => this.props.onSetFilter(el.name)}
          className={`btn ${clazz}`}
        >
          {el.title}
        </button>
      );
    });

    return (
      <>
        <div className="search">
          <div className="d-flex">
            <input
              type="text"
              placeholder="search todo"
              className="form-control"
              onChange={(el) => this.props.handleSearchInput(el.target.value)}
            />
            {/* <button className="btn btn-info">All</button>
            <button className="btn btn-outline-secondary">Active</button>
            <button className="btn btn-outline-secondary">Done</button> */}
            {buttons}
          </div>
        </div>
      </>
    );
  }
}
