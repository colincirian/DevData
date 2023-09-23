import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import "../styles/signout.css";

const supabase = createClient(
  "https://uhgaoewcubwznwzxakfe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZ2FvZXdjdWJ3em53enhha2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMzQ5NDcsImV4cCI6MjAxMDkxMDk0N30.F8d7dCOvsXGuKbsQSldL04thG1upSYU0z4pCpOGxqho"
);

function SignOut() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        // Value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/login");

    if (error) {
      console.error("Unexpected error has occured");
    } else {
      console.log("User has successfully signed out.");
    }
  }

  return (
    <div className="signout-container">
      <header>
        <div className="signout-div">
          {Object.keys(user).length !== 0 ? (
            <>
              <h1> Success </h1>
              <button onClick={() => signOutUser()}>Sign Out</button>
            </>
          ) : (
            <>
              <div>User is not signed in</div>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Go back home!
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default SignOut;
