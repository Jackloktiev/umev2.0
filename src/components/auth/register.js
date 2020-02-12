import React, {useState} from 'react';
import "./login.css";
import { withRouter } from 'react-router-dom';



function Register(props){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const changeHandler = (event)=>{

        switch(event.target.name){
            case "username": setUsername(event.target.value);
            break;
            case "password": setPassword(event.target.value);
            break;
            default: break;
        }
    }

    const submitClickHandler = (event) =>{
        event.preventDefault();
        const data = {
            username:username,
            password:password
        }
        fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>{
            return response.text();
        }).then(result=>{
            console.log(result);
            props.history.push("/app");
        })
    }


    return(
       <div>

           <div className = "LoginDiv">
               <form action = "/register" method = "POST" >
                   <h3>Let's sign you up!</h3>
                   <label>User name - something that you will be using to login</label>
                   <input type = "text" placeholder = "User name" className = "loginInput" name = "username" value = {username} onChange ={changeHandler} ></input>
                   <label>Password</label>
                   <input type = "password" placeholder = "Password" className = "loginInput" name = "password" value = {password} onChange ={changeHandler} ></input>
                   <button type = "submit" className = "loginBtn" onClick = {submitClickHandler} >Register</button>
               </form>
           </div>
           

       </div>
    )
}

export default withRouter(Register);