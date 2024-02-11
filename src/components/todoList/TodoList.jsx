import React from "react";
import TodoListitem from "../todoListitem/TodoListitem";
import "./TodoList.css";

const TodoList = (props) => {
  const todoData = props.todoData;
  const delBtn = props.deleteBtn;
  const btnImp = props.btnImp;
  const spanBtn = props.spanBtn;
  const filteredTodos = props.filteredTodos
  // console.log(props.todoData);
  if (props.todoData.length == 0) {
    return <p>No Data . . . </p>;
  }

  const elementter = props.todoData.map((el) => {
    return (
      <li className="list-group-item" key={el.id}>
        <TodoListitem
          title={el.title}
          imp={el.important}
          done={el.done}
          delete={() => delBtn(el.id)}
          btnImp={() => btnImp(el.id)}
          spanBtn={() => spanBtn(el.id)}
        />
      </li>
    );
  });
  return (
    <>
      <div className="todo-list">
        <ul className="list-group">{elementter}</ul>
      </div>
    </>
  );
};

export default TodoList;
