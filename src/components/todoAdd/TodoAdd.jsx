import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    text: "",
  };

  setText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <div className="todo-add">
          <div className="d-flex">
            <input
              type="text"
              placeholder="add todo"
              className="form-control"
              value={this.state.text}
              onChange={this.setText}
            />
            {/* <button onClick={() => this.props.onAddTodo(this.state.text)} className="btn btn-info">add</button> */}
            <button
              onClick={() => {
                if (this.state.text.trim()) {
                  this.props.onAddTodo(this.state.text);
                  this.state.text = "";
                }
              }}
              className="btn btn-info"
            >
              add
            </button>
          </div>
        </div>
      </>
    );
  }
}
