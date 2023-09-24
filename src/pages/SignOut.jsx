import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signout.css";
import { supabase } from "../backend/supabaseClient";

function SignOut() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
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
              <h1> Successfully signed out </h1>
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
