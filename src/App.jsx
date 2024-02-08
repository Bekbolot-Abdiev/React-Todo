import React, { useState } from "react";
import TodoHeader from "./components/todoHeader/TodoHeader";
import TodoSearch from "./components/todoSearch/TodoSearch";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

const App = () => {
  const [todoData, setTodo] = useState([
    { id: 1, title: "Learn React", important: false, done: false },
    { id: 2, title: "Learn Js", important: false, done: false },
    { id: 3, title: "Learn Redux", important: false, done: false },
  ]);

  const delteBtn = (id) => {
    let delBtn = todoData.filter((el) => el.id !== id);
    setTodo(delBtn);
  };

  const btnImp = (id) => {
    // let impTodo = todoData.map((el) => el.id);
    // console.log(id);
    const index = todoData.findIndex((el) => el.id === id);
    console.log(index, "index");
    const todo = todoData[index];
    console.log(todo);
    const updTodo = { ...todo, important: !todo.important };
    console.log(updTodo, "upTodo");
    const before = todoData.slice(0, index);
    console.log(before, "before");
    const after = todoData.slice(index + 1);
    console.log(after, "after");
    setTodo([...before, updTodo, ...after]);
  };


  const spanBtn = (id) => {
    console.log(id);
    const index = todoData.findIndex((el) => el.id === id);
    console.log(index, "index");
    const todo = todoData[index];
    console.log(todo);
    const updTodo = { ...todo, done: !todo.done };
    console.log(updTodo, "upTodo");
    const before = todoData.slice(0, index);
    console.log(before, "before");
    const after = todoData.slice(index + 1);
    console.log(after, "after");
    setTodo([...before, updTodo, ...after]);
  }


  const addNewTodo = (text) => {
    console.log(text);
    const ids = todoData.map((el) => el.id);
    console.log(ids.at(-1) + 1);
    const newTodo = {
      title: text,
      important: false,
      done: false,
      id: ids.at(-1) + 1 || 1,
    };
    console.log(newTodo);
    setTodo([...todoData, newTodo]);
  };

  return (
    <>
      <div style={{ width: 600 }} className="mx-auto">
        <TodoHeader />
        <TodoSearch />
        <TodoList todoData={todoData} deleteBtn={delteBtn} btnImp={btnImp} spanBtn={spanBtn} />
        <TodoAdd onAddTodo={addNewTodo} />
      </div>
    </>
  );
};

export default App;
