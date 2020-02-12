import React, { useState } from 'react';
import "./login.css";
import { withRouter } from 'react-router-dom';

function Login(props) {

    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");

    //---Control form elements---
    //--User name--
    const userNameChangeHandler = (event)=>{
        setUserName(event.target.value);
    }
    //--Password--
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value);
    }
    //--Sign-in button click handler--
    const loginClickHandler = (event)=>{
        event.preventDefault();
        const formData = {
            username:userName,
            password:password
        }
        fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(response=>{
            return response.json();
        }).then(result=>{
            console.log(result.token);
            props.tokenTransfer(result.token);
            props.history.push("/app");
        })
      }

    return (


        <div>

            <div className="LoginDiv">
                <form action="/login" method="POST" >
                    <h3>Please sign in</h3>
                    <label>User name</label>
                    <input type="text" placeholder="User name" className="loginInput" name="username" onChange = {userNameChangeHandler} value = {userName} ></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="loginInput" name="password" onChange = {passwordChangeHandler} value = {password}  ></input>
                    <button type="submit" className="loginBtn" onClick={loginClickHandler}>Sign in</button>

                    <button className="loginBtn">Register</button>

                </form>
            </div>


        </div>
    )
}

export default withRouter(Login);