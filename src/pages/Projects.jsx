import React, { useState } from "react";
import { ProjectForm } from "./ProjectForm"
import { ProjectList } from "./ProjectList"
import "../styles/projects.css";

export default function Projects() {
  const [todos, setTodos] = useState([]);
    
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="project-form">
      <ProjectForm onSubmit={addTodo} />
      <ProjectList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

//const createProject = async (
  //   taskDescription,
  //   dueDate,
  //   completionStatus,
  //   userId
  // ) => {
  //   const { data, error } = await supabase.from("projects").insert([
  //     {
  //       task_description: taskDescription,
  //       due_date: dueDate,
  //       completion_status: completionStatus,
  //       user_id: userId,
  //     },
  //   ]);
  // };
  
  // const fetchUserProjects = async (userId) => {
  //   const { data, error } = await supabase
  //     .from("projects")
  //     .select("*")
  //     .eq("user_id", userId);
  // };
  
  // const updateTodoItem = async (todoItemId, updatedData) => {
  //   const { data, error } = await supabase
  //     .from("projects")
  //     .update(updatedData)
  //     .eq("todo_id", todoItemId);
  // };
  
  // const deleteTodoItem = async (todoItemId) => {
  //   const { data, error } = await supabase
  //     .from("projects")
  //     .delete()
  //     .eq("todo_id", todoItemId);
  // };