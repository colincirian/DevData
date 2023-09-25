import React, { useState } from "react";

export function ProjectForm({ onSubmit }) {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <h1>Future Project Ideas</h1>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="print-btn">Print Idea</button>
      </form>
  );
}

  // database functin that I couldn't figure out

  // async function insertProject() {
  //   try {
  //     const { data, error } = await supabase
  //       .from("projects")
  //       .insert([{ id: 1, name: "Denmark" }]);

  //     if (error) {
  //       console.error("Error inserting data:", error);
  //     } else {
  //       console.log("Data inserted successfully:", data);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }