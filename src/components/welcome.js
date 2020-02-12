import React from 'react';
import {Link} from "react-router-dom";

function Welcome (){
    return(
        <div>
            <h1>This is a welcome page</h1>
            <h1>This is a welcome page</h1>
            <h1>This is a welcome page</h1>
            <h1>This is a welcome page</h1>
            <h1>This is a welcome page</h1>

            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </div>
)}

export default Welcome;