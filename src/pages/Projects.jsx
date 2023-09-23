import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "../styles/projects.css";
import { ProjectForm } from "./ProjectForm"
import { ProjectList } from "./ProjectList"

const supabase = createClient(
  "https://uhgaoewcubwznwzxakfe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZ2FvZXdjdWJ3em53enhha2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMzQ5NDcsImV4cCI6MjAxMDkxMDk0N30.F8d7dCOvsXGuKbsQSldL04thG1upSYU0z4pCpOGxqho"
);

const createProject = async (
  taskDescription,
  dueDate,
  completionStatus,
  userId
) => {
  const { data, error } = await supabase.from("projects").insert([
    {
      task_description: taskDescription,
      due_date: dueDate,
      completion_status: completionStatus,
      user_id: userId,
    },
  ]);
};

const fetchUserProjects = async (userId) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId);
};

const updateTodoItem = async (todoItemId, updatedData) => {
  const { data, error } = await supabase
    .from("projects")
    .update(updatedData)
    .eq("todo_id", todoItemId);
};

const deleteTodoItem = async (todoItemId) => {
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("todo_id", todoItemId);
};

export default function Projects() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
    <>
      <ProjectForm onSubmit={addTodo} />
      <ProjectList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}