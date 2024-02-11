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

  const [filter, setFilter] = useState("all");
  const [searchTodo, setSearchTodo] = useState("");
  const [editingTodoid, setEditingTodoid] = useState(null)
  const [editedText, setEditedText] = useState('')


  
  const onSetFilter = (status) => {
    setFilter(status);
  };

  const handleSearchInput = (text) => {
    setSearchTodo(text);
  };
  //


  const todoFilter = (array, status) => {
    switch (status) {
      case "all":
        return array;
      case "active":
        return array.filter((el) => !el.done);
      case "done":
        return array.filter((el) => el.done);
      default:
        return array;
    }
  };

  const delteBtn = (id) => {
    let delBtn = todoData.filter((el) => el.id !== id);
    setTodo(delBtn);
  };

  const btnImp = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const todo = todoData[index];
    const updTodo = { ...todo, important: !todo.important };
    const before = todoData.slice(0, index);
    const after = todoData.slice(index + 1);
    setTodo([...before, updTodo, ...after]);
  };

  const spanBtn = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const todo = todoData[index];
    const updTodo = { ...todo, done: !todo.done };
    const before = todoData.slice(0, index);
    const after = todoData.slice(index + 1);
    setTodo([...before, updTodo, ...after]);
  };

  const addNewTodo = (text) => {
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

  const doneTodo = todoData.filter((el) => el.done).length;
  const allTodo = todoData.length - doneTodo;
  //
  const filterData = todoData.filter((el) =>
    el.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  const newData = todoFilter(filterData, filter);

  return (
    <>
      <div style={{ width: 600 }} className="mx-auto">
        <TodoHeader
         doneTodo={doneTodo}
         allTodo={allTodo} 
         />
        <TodoSearch
          filter={filter}
          onSetFilter={onSetFilter}
          handleSearchInput={handleSearchInput}
        />
        <TodoList
          todoData={newData}
          deleteBtn={delteBtn}
          btnImp={btnImp}
          spanBtn={spanBtn}
        />
        <TodoAdd onAddTodo={addNewTodo} />
      </div>
    </>
  );
};

export default App;
