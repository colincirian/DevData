import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../backend/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import "../styles/login.css";

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