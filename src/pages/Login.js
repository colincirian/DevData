import React from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import "../styles/login.css";

const supabase = createClient(
    "https://uhgaoewcubwznwzxakfe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZ2FvZXdjdWJ3em53enhha2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzMzQ5NDcsImV4cCI6MjAxMDkxMDk0N30.F8d7dCOvsXGuKbsQSldL04thG1upSYU0z4pCpOGxqho"
)

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (authState) => {
      if (authState === "SIGNED_IN") {
        // User is signed in, navigate to the home page
        navigate('/');
      } else {
        // User is not signed in, navigate to the login page
        navigate('/login');
      }
    });
    

  return (
    <div className="App">
        <header className="login-header">
          <div className="centered-form">
            <Auth 
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={[ "discord", "github" ]}
            />
          </div>
        </header>
    </div>
  );
}

export default Login;