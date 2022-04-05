import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeture.propTypes = {};

function TodoFeture(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle stage
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    newTodoList[idx] = newTodo;

    // update todo list
    setTodoList(newTodoList);
  };

  const renderedTodList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default TodoFeture;
