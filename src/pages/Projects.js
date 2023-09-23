import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://uhgaoewcubwznwzxakfe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZ2FvZXdjdWJ3em53enhha2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMzQ5NDcsImV4cCI6MjAxMDkxMDk0N30.F8d7dCOvsXGuKbsQSldL04thG1upSYU0z4pCpOGxqho"
)

const createProject = async (taskDescription, dueDate, completionStatus, userId) => {
    const { data, error } = await supabase
      .from('projects')
      .insert([
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
      .from('projects')
      .select('*')
      .eq('user_id', userId); 
  };
  
  const updateTodoItem = async (todoItemId, updatedData) => {
    const { data, error } = await supabase
      .from('projects')
      .update(updatedData)
      .eq('todo_id', todoItemId); 
  };

  const deleteTodoItem = async (todoItemId) => {
    const { data, error } = await supabase
      .from('projects')
      .delete()
      .eq('todo_id', todoItemId); 
  };

function ProjectIdeas() {
    return (
        <>
        <div>
            <h1>Projects</h1>
        </div>
        </>
    )
}

export default ProjectIdeas;