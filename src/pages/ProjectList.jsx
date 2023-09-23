import { ProjectItem } from "./ProjectItem";
import { supabase } from "../backend/supabaseClient";

export function ProjectList({ todos, toggleTodo, deleteTodo }) {

  async function fetchData() {
    let { data: projects, error } = await supabase
      .from("projects")
      .select("todo_id");
  }

  return (
    <ul className="list">
      {todos.length === 0}
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
