import React from "react";
import { supabase } from "../backend/supabaseClient";
import "../styles/home.css";
import freecodecamp from "../images/freecodecamp.png";
import w3schools from "../images/w3schools.png";
import leetcode from "../images/leetcode.png";

function Home() {
  supabase.auth.onAuthStateChange(async (authState) => {
    if (authState === "SIGNED_IN") {
      const { user, error } = await supabase
        .from("users") // fetch from users table in database
        .select("*") // select all
        .eq("id", supabase.auth.getUser().id);

      if (error) {
        console.error("Unexpected error has occured", error);
      } else {
        console.log('"User data:', user);
      }
    }
  });

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="background-div">
          <h1>Welcome to DevData</h1>
          <h2>Document your success, failures, and future project plans.</h2>
          <h2>Coding resources:</h2>
          <div className="div-container">
            <a href="https://www.w3schools.com/">
              <img
                className="resources-div"
                src={w3schools}
                alt="Link to W3Schools"
              />
            </a>
            <a href="https://www.freecodecamp.org/">
              <img
                className="resources-div"
                src={freecodecamp}
                alt="Link to freecodecamp"
              />
            </a>
            <a href="https://leetcode.com/">
              <img
                className="resources-div"
                src={leetcode}
                alt="Link to leetcode"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
