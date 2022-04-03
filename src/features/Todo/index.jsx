import React from "react";
import AlbumFeature from "../Album";

TodoFeture.propTypes = {};

function TodoFeture(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      {/* <TodoList todoList={todoList} /> */}
      <AlbumFeature />
    </div>
  );
}

export default TodoFeture;
