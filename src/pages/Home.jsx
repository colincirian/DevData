import React, { useState, useEffect } from "react";
import { supabase } from "../backend/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import Projects from "./Projects";
import "../styles/home.css";

function Home() {

    supabase.auth.onAuthStateChange(async (authState) => {
        if (authState === "SIGNED_IN") {
         const { user, error } = await supabase
            .from('users') // fetch from users table in database
            .select('*') // select all 
            .eq('id', supabase.auth.getUser().id)

        if (error) {
            console.error('Unexpected error has occured', error)
        } else {
            console.log('"User data:', user)
        }
    }
});

    return (
        <div className="home-container">
            <header className="home-header">
            <h1>Welcome to DevData</h1>
            </header>
            <Projects />
        </div>
    )
}

export default Home;
