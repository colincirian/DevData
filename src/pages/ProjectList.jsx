import { ProjectItem } from "./ProjectItem";
import React, { useEffect } from "react";

export function ProjectList({ todos, toggleTodo, deleteTodo }) {
  // Use effect function to save the todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className="list">
      {todos.length === 0 && <p>No ideas to display</p>}
      {todos.map((todo) => {
        return (
          <ProjectItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
